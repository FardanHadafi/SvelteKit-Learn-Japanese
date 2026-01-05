<div class="auth-wrapper">
	<div class="auth-card">
		<h1>Sign Up</h1>
		<p>Create your account</p>

		<form method="POST">
			<div class="field">
				<label for="name">Name</label>
				<input id="name" name="name" type="text" required />
			</div>

			<div class="field">
				<label for="email">Email</label>
				<input id="email" name="email" type="email" required />
			</div>

			<div class="field">
				<label for="password">Password</label>
				<input id="password" name="password" type="password" required />
			</div>

			<button type="submit">Create Account</button>
		</form>

		<div class="auth-footer">
			Already have an account?
			<a href="/sign-in">Sign in</a>
		</div>
	</div>
</div>
