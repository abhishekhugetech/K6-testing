# API testing Using k6

---

### Prerequisite

> Install K6

### Running test for same URL and same request

```
k6 run user.js
```

### Running Test for 800 users total 1000 times

```
k6 run --vus 800 --iterations 1000 user.js
```
