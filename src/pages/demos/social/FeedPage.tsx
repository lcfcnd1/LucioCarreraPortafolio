import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageSquare, Share2, Image, Video, BarChart } from "lucide-react";

const initialPosts = [
  { id: 1, author: "Elena Rodriguez", username: "@elena_dev", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", content: "¡Explorando las nuevas features de React 19! El compilador es mágico. ✨ #React #Frontend", likes: 125, comments: 12, shares: 8, liked: false },
  { id: 2, author: "Carlos Gómez", username: "@carlos_design", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e", content: "El minimalismo no es una falta de algo. Es simplemente la cantidad perfecta de algo. ¿Qué opinan?", image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400&q=70&fm=webp", likes: 350, comments: 45, shares: 22, liked: true },
];

const FeedPage = () => {
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (id: number) => {
    setPosts(posts.map(p => 
      p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
    ));
  }
  
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-4">
          <Textarea placeholder="¿Qué estás pensando, Lucio?" className="mb-4" />
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-muted-foreground">
              <Image className="cursor-pointer hover:text-primary" />
              <Video className="cursor-pointer hover:text-primary" />
              <BarChart className="cursor-pointer hover:text-primary" />
            </div>
            <Button>Publicar</Button>
          </div>
        </CardContent>
      </Card>

      {posts.map(post => (
        <Card key={post.id}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={post.avatar} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.username}</p>
                </div>
                 <Link to={`post/${post.id}`} className="mt-2 block">{post.content}</Link>
                {post.image && <Link to={`post/${post.id}`}><img src={post.image} alt="Post content" className="mt-4 rounded-lg border" /></Link>}
              </div>
            </div>
            <div className="flex justify-around mt-4 pt-4 border-t">
              <Button variant="ghost" size="sm" className="flex items-center gap-2" onClick={() => toggleLike(post.id)}>
                <Heart size={18} className={post.liked ? 'text-red-500 fill-red-500' : ''} /> {post.likes}
              </Button>
              <Button asChild variant="ghost" size="sm" className="flex items-center gap-2">
                <Link to={`post/${post.id}`}>
                    <MessageSquare size={18} /> {post.comments}
                </Link>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Share2 size={18} /> {post.shares}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default FeedPage;
