import imageUrlBuilder from '@sanity/image-url'
import { client } from "../client"

const builder = imageUrlBuilder(client)

export function urlFor(source: Record<string, any>) {
  return builder.image(source).auto('format').url();
}