import React from 'react'

const NavBook = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LIBRARY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Addbook</a>
        <a class="nav-link" href="/SearchBook">Search</a>
        <a class="nav-link" href="/DeleteBook">Delete</a>
        <a class="nav-link" href="/View">View</a>
        
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default NavBook