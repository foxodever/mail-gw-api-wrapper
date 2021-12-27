# Mail gw

Node.js wrapper for https://mail.gw/ API

# Installation

## NPM

```bash
soon
```

## Domain

### List Domains

```js
mail.domains((result) => {
  console.log(result);
})
```

### Get Domain

```js
mail.domain("domain id", (result) => {
  console.log(result);
})
```

---

## Account

### Create Account

```js
mail.create("user@example.com", "password", (result) => {
  console.log(result);
});
```

### Login

```js
mail.login("user@example.com", "password", (result) => {
  console.log(result);
})
```

### Logout

```js
mail.logout((result) => {
  console.log(result);
})
```

### Get Account Data

```js
mailjs.me((result) => {
  console.log(result);
})
```

## Message

### List messages

```js
mailjs.messages((result) => {
  console.log(result);
})
```


### Read a message

```js
mailjs.message("message id", (result) => {
  console.log(result);
})
```

### Delete a message

```js
mailjs.deleteMessage("message id", (result) => {
  console.log(result);
})
```
