export default function InstagramEmbed({ instagramLink }: { instagramLink: string }) {
  return (
    <>
      <blockquote className="instagram-media" data-instgrm-permalink={instagramLink} data-instgrm-version="14">
        <a href={instagramLink} className="hidden">
          Instagram Embed
        </a>
      </blockquote>
      <script async defer src="//www.instagram.com/embed.js" />
    </>
  )
}
