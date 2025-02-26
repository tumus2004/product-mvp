export const schema = gql`
  type Reservation {
    id: Int!
    checkInDate: DateTime!
    checkOutDate: DateTime!
    notes: String
    createdAt: DateTime!
    updateddAt: DateTime!
    hub: Hub!
    hubId: Int!
    owner: User!
    ownerId: String!
  }

  type Query {
    reservations: [Reservation!]! @requireAuth
    reservation(id: Int!): Reservation @requireAuth
  }

  input CreateReservationInput {
    checkInDate: DateTime!
    checkOutDate: DateTime!
    notes: String
    updateddAt: DateTime!
    hubId: Int!
    ownerId: String!
  }

  input UpdateReservationInput {
    checkInDate: DateTime
    checkOutDate: DateTime
    notes: String
    updateddAt: DateTime
    hubId: Int
    ownerId: String
  }

  type Mutation {
    createReservation(input: CreateReservationInput!): Reservation! @requireAuth
    updateReservation(id: Int!, input: UpdateReservationInput!): Reservation!
      @requireAuth
    deleteReservation(id: Int!): Reservation! @requireAuth
  }
`
