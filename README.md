Create APIs

1. GET /categories
2. GET /products/:category
3. POST /category/new
4. POST /product/new
5. DELETE /category/:id
6. DELETE /product/:id

// ============== MODEL

// --- Category

```
{
    id: number,
    name: string
}
```

// --- Product

```
{
    id: number,
    category: number,
    name: String
}
```

// ============== RESPONSE

1. GET /categories

```
[
    {
        id: number,
        name: string
    }
]
```

2. GET /products/:category

```
[
    {
        id: number
        category: {
            id: number
            name: string
        }
        name: String
    }
]
```

3. POST /category/new

```
{
    id: number
    name: string
}
```

4. POST /product/new

```
{
    id: number
    category: {
        id: number
        name: string
    }
    name: String
}
```

5. DELETE /category/:id

```
{
    id: number
    name: string
}
```

6. DELETE /category/:id

```
{
    id: number
    category: {
        id: number
        name: string
    }
    name: String
}
```
