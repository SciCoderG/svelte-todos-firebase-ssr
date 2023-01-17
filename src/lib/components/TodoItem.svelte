<script lang="ts">
	import { deleteTodo, updateIsDone } from '$lib/firebase-todos';
	import { user } from '$lib/stores';

	export let isDone = false;
	export let title: string = 'Title';
	export let description: string = 'Description';
	export let id: string;

	function handleToggle() {
		if ($user) {
			updateIsDone($user.uid, id, !isDone);
		}
	}

	function handleDelete(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	): any {
		if ($user) deleteTodo($user?.uid, id);
	}
</script>

<div class="flex flex-row flex-auto items-center">
	<label>
		<input type="checkbox" class="checkbox" checked={isDone} on:change={handleToggle} />
	</label>
	<div tabindex="-1" class="collapse collapse-arrow grow shrink">
		<input type="checkbox" />
		<div class="collapse-title ">{title}</div>

		<div class="collapse-content whitespace-normal flex flex-row">
			<span class="grow">
				{description}
			</span>
		</div>
	</div>
	<div>
		<button on:click={handleDelete} class="btn btn-ghost btn-square btn-sm">
			<span class="material-symbols-outlined"> delete </span>
		</button>
	</div>
</div>
