import { gql } from '@apollo/client'

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      createdAt
      soldAt
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        _id
        name
      }
    }
  }
`

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
      name
      remarks
      contents
      price
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        _id
        name
      }
    }
  }
`
export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      images
      tags
      useditemAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`
