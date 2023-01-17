import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';

export function getTodoCollection(uid: string) {
	return collection(db, `users/${uid}/todos`);
}

export async function addTodo(uid: string, title: string, description: string) {
	try {
		await addDoc(getTodoCollection(uid), {
			title: title,
			description: description,
			isDone: false
		});
	} catch (error) {
		console.log(`Error when adding todos: ${error}`);
	}
}

function docRef(uid: string, todoId: string) {
	return doc(db, 'users', uid, 'todos', todoId);
}

export async function updateIsDone(uid: string, todoId: string, isDone: boolean) {
	await updateDoc(docRef(uid, todoId), { isDone: isDone });
}

export async function deleteTodo(uid: string, todoId: string) {
	await deleteDoc(docRef(uid, todoId));
}
