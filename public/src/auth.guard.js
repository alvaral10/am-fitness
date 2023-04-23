(() => {
    if (
      window.location.pathname !== '/index.html' &&
      (!authService.isAuth() || authService.isTokenExpired())
    ) {
      alert('Sign into the app to proceed.');
      authService.logout('index.html');
    } else if (
      window.location.pathname === '/index.html' &&
      authService.isAuth()
    ) {
      window.location.href = 'todo.html';
    }
  })();
  