import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { RecipeDiv } from '../../../infrastructure/theme/components/GlobalStyles';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { app } from '../../../features/login/components/firebase';
import SendIcon from '@material-ui/icons/Send';
import { TextField } from '@material-ui/core';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const CommunityDiv = styled.div`
	max-height: 85vh;
	padding: 16px;
	overflow: auto;
`;

const MessageDiv = styled.div`
	display: flex;
	align-items: center;

	& p {
		max-width: 500px;
		margin-bottom: 12px;
		line-height: 24px;
		padding: 10px 20px;
		border-radius: 16px;
		position: relative;
		color: black;
		text-align: center;
		background-color: white;
	}
	&.sent {
		flex-direction: row-reverse;

		& p {
			color: white;
			background: #356859;
			align-self: flex-end;
		}
	}

	& .received {
		&p {
			background: #fffbe6;
			color: black;
		}
	}
`;

const ChatForm = styled.form`
	display: inline-flex;
	align-items: center;
	width: 100%;
`;

const AvatarImg = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	margin: 2px 5px;
`;

const AvatarDiv = styled.div`
	margin: 2px 5px;
	display: inline;
`;

function ChatMessage(props) {
	const { text, uid, photoURL } = props.message;

	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

	return (
		<>
			<MessageDiv className={`message ${messageClass}`}>
				{photoURL ? (
					<AvatarImg src={photoURL} alt='avatar' />
				) : (
					<AvatarDiv>
						<AccountCircleIcon fontSize='large' />
					</AvatarDiv>
				)}

				<p>{text}</p>
			</MessageDiv>
		</>
	);
}

function Community(props) {
	const dummy = useRef();
	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(25);

	const [messages] = useCollectionData(query, { idField: 'id' });

	const [formValue, setFormValue] = useState('');

	const sendMessage = async (e) => {
		e.preventDefault();

		const { uid, photoURL } = auth.currentUser;

		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
		});

		setFormValue('');
		dummy.current.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<CommunityDiv>
			<div>
				{messages &&
					messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

				<span ref={dummy}></span>
			</div>

			<ChatForm onSubmit={sendMessage}>
				<TextField
					style={{ margin: 8 }}
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
					placeholder={`How'd it go?`}
					fullWidth
					InputLabelProps={{
						shrink: true,
					}}
					color='secondary'
				/>

				<button type='submit' disabled={!formValue}>
					<SendIcon />
				</button>
			</ChatForm>
		</CommunityDiv>
	);
}

export default Community;
