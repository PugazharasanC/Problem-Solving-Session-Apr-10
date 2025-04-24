# Tree

## General Tree

```mermaid
graph TB
    A[Root - Parent] --> B[child1]
    A --> C[Child2]
    A --> D[Child3]
    B --> E[Child4]
    B --> F[Child5]
    C --> G[CHild6]
    D --> H[Child7]
    D --> I[Child8]
    E --> J[Child9]
```

## Binary Tree

```mermaid
graph TB
A[10, IND -> 0] --left--> B[11 IND -> 1]
A --right-->C[12 ind->2]
B --left-->D[13 IND -> 3]
B --right-->E[14 IND -> 4]

C --left--> F[15 IND -> 5]
C --right--> G[16 IND -> 6]

D --left--> H[17]
D --right--> I[18]

E --left--> J[19]
```

## Binary Search Tree

```mermaid
graph TB
A[25] --left--> B[12]

B --left--> E[8]

B --right--> C[18]

A --right-->D[50]

D --left--> F[38]
D--right--> G[75]
```

### what is the values are sorted while inserting

```mermaid
graph TB
A[1] --right--> B[2]
B--right-->C[3]
C --right-->D[4]
D--right-->E[5]
E --right--> F[6]
```

### Tree Traversals

|  Type  | Pre Order |  Inorder  | postorder |
| :----: | :-------: | :-------: | :-------: |
| First  | root/Data |   left    |   left    |
| Second |   left    | root/Data |   right   |
| third  |   right   |   right   | root/Data |

## AVL Tree

> Self Balancing Binary Search Tree

```mermaid
graph TB
B[2] --left-->A[1]
B--right-->D
D--left-->C[3]
D[4]--right-->F[5]
```

## Red Black Tree

## Splay Tree

## N-ary tree
```mermaid
graph TD
    A[Node A] --> B[Node B]
    A --> C[Node C]
    B --> D[Node D]
    C --> D
    D --> E[Node E]
    E --> B
```