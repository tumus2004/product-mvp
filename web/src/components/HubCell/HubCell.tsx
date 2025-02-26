/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FindHubQuery, Hub } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import BookReservation from 'src/components/HubDetail/BookReservation/BookReservation'
import { useStore } from 'src/utils/stores/bookReservationStore'
import { FIND_HUB_QUERY } from 'src/utils/graphql/queries/hubs'

export const QUERY = FIND_HUB_QUERY

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ hub }: CellSuccessProps<FindHubQuery>) => {
  const setSelectedHub = useStore((store) => store.setSelectedHub)
  setSelectedHub(hub as Hub)
  return (
    <BookReservation
      name={hub.name}
      location={hub?.location?.city as string}
      images={hub?.images as any}
      ownerId={hub?.ownerId}
      amenities={hub?.amenities}
    />
  )
}
