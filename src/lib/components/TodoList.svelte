<script lang="ts">
	import { user } from '$lib/stores';
	import TodoItem from '$lib/components/TodoItem.svelte';
	import { onDestroy } from 'svelte';
	import { getTodoCollection } from '$lib/firebase-todos';
	import { onSnapshot, QuerySnapshot, type DocumentData } from 'firebase/firestore';

	let todos: any[] = [];
	let unsubscribe: Function;

	$: {
		if ($user) {
			unsubscribe = onSnapshot(getTodoCollection($user?.uid), displayTodos);
		} else {
			todos = [];
		}
	}

	function displayTodos(snapshot: QuerySnapshot<DocumentData>) {
		let newTodos: any[] = [];

		if (snapshot) {
			snapshot.forEach((doc) => {
				newTodos.push(doc);
			});
		}
		todos = newTodos;
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="p-6">
	<h1 class="text-center text-3xl font-bold uppercase">
		{#if $user}
			{$user?.displayName}'s
		{/if} Todos
	</h1>
</div>

{#if 0 == todos.length}
	<p class="text-center font-bold uppercase">Nothing todo.</p>
{/if}
{#each todos as todo}
	<TodoItem {...todo.data()} id={todo.id} />
{/each}
