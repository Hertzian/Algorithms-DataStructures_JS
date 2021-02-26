class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  /**
   * Write a method called addVertex, which accepts a name of a vertex
   * It should add a key to the adjacency list with the name of the vertex and set its value to be an empt array
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  /**
   * This function should accept two vertices, we can call them vertex1 and vertex2
   * The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
   * The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
   * Don't worry about handling errors/invalid vertices
   */
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }

  /**
   * This function should accept two vertices, we'll call them vertex1 and vertex2
   * The function should reassing the key of vertex1 to be an array that does not contain vertex2
   * The function should reassign the key of vertex2 to be an array that does not contain vertex1
   * Don't worry about handling errors/invalid vertices
   */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
      v !== vertex2
    })

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => {
      v !== vertex1
    })
  }

  
}
