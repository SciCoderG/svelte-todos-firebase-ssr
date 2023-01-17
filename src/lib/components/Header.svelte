<script lang="ts">
	import { fade } from 'svelte/transition';
	import { login, logout } from '$lib/firebase';
	import { user } from '$lib/stores';

	class NavBarItem {
		display: string;
		route: string;
		/**
		 * @param {string} name
		 * @param {string} route
		 */
		constructor(display: string, route: string) {
			this.display = display;
			this.route = route;
		}
	}

	function handleLogin() {
		login();
	}

	function handleLogout(event: any) {
		logout();
	}
</script>

<div
	class="navbar sticky z-50 top-0 transition-all duration-100 shadow-md text-primary-content bg-primary"
	transition:fade
>
	<div class="navbar-start" />
	<div class="navbar-center text-xs" />

	<div class="navbar-end" />
	{#if !$user}
		<button class="btn btn-primary" on:click={handleLogin}>Login</button>
	{:else}
		<div class="dropdown dropdown-end text-base-content">
			<label for="profile-dropdown" tabindex="-1" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img alt="profile-pricture" src={$user?.photoURL} />
				</div>
			</label>
			<ul
				id="profile-dropdown"
				tabindex="-1"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				<li class="mx-4 ">Logged in as {$user?.displayName}</li>
				<li class="mx-4 text-xs">{$user?.email}</li>
				<li><button on:click={handleLogout}>Logout</button></li>
			</ul>
		</div>
	{/if}
</div>
