<script lang="ts">
	import AddTodo from '$lib/components/AddTodo.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import { login } from '$lib/firebase';
	import { user } from '$lib/stores';
	import { getAuth, onAuthStateChanged, type Auth } from 'firebase/auth';
	import { onMount } from 'svelte';

	onMount(async () => {
		const auth: Auth = getAuth();
		onAuthStateChanged(auth, (newUser) => {
			user.set(newUser);
		});
	});

	function handleLogin(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	): any {
		login();
	}
</script>

{#if $user}
	<div class="grid place-items-center pt-6 gap-6 mb-6">
		<div class="card xs:min-h-screen md:w-3/4 lg:w-1/2 shadow-xl card-bordered w-full">
			<div class="card-body">
				<TodoList />
			</div>
		</div>
		<div class="card md:w-3/4 lg:w-1/2 shadow-xl card-bordered w-full">
			<div class="card-body">
				<AddTodo />
			</div>
		</div>
	</div>
{:else}
	<div class="flex flex-col min-h-[90vh] justify-center items-center gap-5">
		<h1 class="text-center text-3xl font-bold uppercase">Start doing</h1>
		<h1 class="text-center text-1xl font-bold uppercase">by</h1>
		<button class="btn btn-primary btn-lg" on:click={handleLogin}>
			<h1 class="text-center text-3xl font-bold uppercase">Logging in</h1>
		</button>
	</div>
{/if}
