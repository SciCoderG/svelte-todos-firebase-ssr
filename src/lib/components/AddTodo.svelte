<script lang="ts">
	import { addTodo } from '$lib/firebase-todos';
	import { user } from '$lib/stores';

	let title: string = '';
	let description: string = '';

	function addNewTodo() {
		if ($user) {
			addTodo($user.uid, title, description);
		}
		title = '';
		description = '';
	}
</script>

<input
	class="block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
	id="grid-first-name"
	type="text"
	placeholder="Enter a title"
	bind:value={title}
/>
<textarea
	class="block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
	id="grid-first-name"
	placeholder="Enter a description"
	rows="3"
	bind:value={description}
/>
<div class="card-actions">
	<button class="btn btn-primary w-full" on:click={addNewTodo}>Add</button>
</div>
