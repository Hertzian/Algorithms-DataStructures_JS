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
  addEdge(vertex1, vertex2) {
    
  }
}
