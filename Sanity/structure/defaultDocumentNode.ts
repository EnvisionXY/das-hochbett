import type {DefaultDocumentNodeResolver} from 'sanity/structure'
import ArtistEventsPane from '../schemaTypes/components/ArtistEventsPane' // passe ggf. den Pfad an

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType === 'artist') {
    return S.document().views([S.view.form(), S.view.component(ArtistEventsPane).title('Events')])
  }

  return S.document().views([S.view.form()])
}
