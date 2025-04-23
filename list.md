# Linked List Diagram Using Mermaid

style head fill:#f9f,stroke:#333,stroke-width:2px
style tail fill:#ff9,stroke:#333,stroke-width:2px
style null1 fill:#ccc,stroke:#000,stroke-width:1px

## Singly Linked List

```mermaid
graph LR
    head(HEAD) -.-> node1(node1)
    node1 --next--> node2(node2)
    node2 --next--> node3(node3)
    node3 --next--> node4(node4)
    node4 --next--> null((null))
```

## Doubly Linked List

```mermaid
graph LR
    head(HEAD) -.-> node1(node1)
    node1 --next--> node2(node2)
    node2 ==prev==>node1
    node2 --next--> node3(node3)
    node3 ==prev==> node2
    node3 --next--> node4(node4)
    node4 ==prev==> node3
    node1 ==prev==> null1((null))
    tail(TAIL) -.-> node4
    node4 --next--> null2((null))

```

## Circular Linked List

### Using Slingly Linked List

```mermaid
graph LR
    head(HEAD) -.-> node1(node1)
    node1 --next--> node2(node2)
    node2 --next--> node3(node3)
    node3 --next--> node4(node4)
    node4 --next--> node1
```

### Using Doubly Linked List

```mermaid
graph LR
    head(HEAD) -.-> node1(node1)
    node1 --next--> node2(node2)
    node2 ==prev==>node1
    node2 --next--> node3(node3)
    node3 ==prev==> node2
    node3 --next--> node4(node4)
    node4 ==prev==> node3
    node1 ==prev==> node4
    tail(TAIL) -.-> node4
    node4 --next--> node1

```

## Detect a cycle in a linked list

### LinkedList without a cycle

```mermaid
graph LR
    head(HEAD) -.-> node1(chennai)
    node1 --next--> node2(poonamallee)
    node2 --next--> node3(sriperumpudhur)
    node3 --next--> node4(vellore)
    node4 --next--> node5(vaniyambadi)
    node5 --next--> node6(ambur)
    node6 --next--> node7(thirupathur)
    node7 --next--> node8(hosur)
    node8 --next--> null((bangalore))
```

### Linked List with Cycle

```mermaid
graph LR
    head(HEAD) -.-> node1(chennai)
    node1 --next--> node2(poonamallee)
    node2 --next--> node3(sriperumpudhur)
    node3 --next--> node4(vellore)
    node4 --next--> node5(vaniyambadi)
    node5 --next--> node6(ambur)
    node6 --next--> node7(thirupathur)
    node7 --next--> node8(hosur)
    node8 --next--> node3
    null((banglore))
```
