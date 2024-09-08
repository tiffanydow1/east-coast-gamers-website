'use client'

import { useEffect, useState } from 'react';

import { CollectionType } from '@/lib/types';

import Loader from '../../components/Loader/Loader';
import CollectionForm from '../../components/Collections/CollectionsForm';

const CollectionDetails = ({ params }: { params: { collectionId: string }}) => {
  const [loading, setLoading] = useState(true);
  const [collectionDetails, setCollectionDetails] = useState<CollectionType | null>(null);

  const getCollectionDetails = async () => {
    try {
      const res = await fetch(`/api/collections/${params.collectionId}?admin=true`, {
        method: 'GET'
      })
      const data = await res.json()
      setCollectionDetails(data)
      setLoading(false)
    } catch (err) {
      console.log('[collectionId_GET]', err)
    }
  }

  useEffect(() => {
    getCollectionDetails()
  }, [])

  return loading ? <Loader /> : (
    <CollectionForm initialData={collectionDetails} />
  )
}

export default CollectionDetails;
