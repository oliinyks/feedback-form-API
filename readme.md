# Node.js REST ARI

The REST API is designed to work with user messages.

## Work with a feed

Add feedback

```bash
@ POST api/feedback

Content-Type: application/json
RequestBody: {
"name": "example",
"email": "example@example.com",
"message": "example"
}
```

Get all feedbacks

```bash
@ GET api/feedback
```
