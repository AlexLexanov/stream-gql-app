// import * as Relay from "graphql-relay";
// import { ObjectType, Field, ArgsType } from "@nestjs/graphql";

// export function EdgeType<NodeType>(nodeName: string) {
//   (`${nodeName}Edge`, { isAbstract: true })
//   abstract class Edge implements Relay.Edge<NodeType> {
//     ((type) => nodeType)
//     node: NodeType;

//     ((type) => String, {
//       description: "Used in `before` and `after` args",
//     })
//     cursor: Relay.ConnectionCursor;
//   }

//   return Edge;
// }