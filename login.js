import supabase from './supabase.js'; // Import Supabase client

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data: { session }, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        console.error('Login error:', error);
        alert('Login failed');
    } else {
        localStorage.setItem('supabase_auth_token', session.access_token); // Store token
        window.location.href = 'https://secure-intelliquinte.netlify.app'; // Redirect to secure page
    }
});
