import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SendIcon from '@material-ui/icons/Send';
import { TextField } from '@material-ui/core';
import {
	CommunityDiv,
	MessageDiv,
	ChatForm,
	AvatarImg,
	AvatarDiv,
	EmptyHeader,
} from '../../../infrastructure/theme/components/GlobalStyles';
const auth = firebase.auth();
const firestore = firebase.firestore();

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
		<>
			<EmptyHeader>Chat with the community!</EmptyHeader>
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
		</>
	);
}

export default Community;
