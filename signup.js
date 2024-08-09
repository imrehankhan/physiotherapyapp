const auth0 = await createAuth0Client({
  domain: 'dev-da3qxxpbwwtt5mki.us.auth0.com',
  client_id: 'gm89VCHn5CjUjQhWZO4BfmBsnKUEQV1G'
});


// Check if the user is authenticated
const isAuthenticated = await auth0.isAuthenticated();

// Login function
const login = async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};

// Logout function
const logout = () => {
  auth0.logout({
    returnTo: window.location.origin
  });
};

// Handle the authentication callback
const handleRedirectCallback = async () => {
  await auth0.handleRedirectCallback();
  const user = await auth0.getUser();
  console.log(user);
};

// Call the handleRedirectCallback if needed
if (window.location.search.includes('code=')) {
  await handleRedirectCallback();


  if (isAuthenticated) {
    const user = await auth0.getUser();
    document.getElementById('profile').innerText = JSON.stringify(user);
  }
}