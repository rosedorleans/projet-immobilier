<template>
  <h1>Contact</h1>
  <h2>Besoin de nous contacter ? Ca tombe bien, on adore discuter ;)</h2>
  <form action="" method="post">
    <div>
        <label for="nom">Votre nom</label>
        <input type="text" id="nom" name="nom" placeholder="Martin" required>
    </div>
    <div>
        <label for="email">Votre e-mail</label>
        <input type="email" id="email" name="email" placeholder="monadresse@mail.com" required>
    </div>
    <div>
        <label for="message">Votre message</label>
        <textarea id="message" name="message" placeholder="Bonjour, je vous contacte car...." required></textarea>
    </div>
    <button type="submit">Envoyer mon message</button>
  </form>
</template>