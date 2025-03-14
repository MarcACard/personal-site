import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Writing',
  description: '',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter dark:text-zinc-50">My Writing</h1>
      <BlogPosts />
    </section>
  )
}
