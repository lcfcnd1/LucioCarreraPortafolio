import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageSquare, Share2, ArrowLeft } from "lucide-react";

const mockPosts = [
  { id: 1, author: "Elena Rodriguez", username: "@elena_dev", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", content: "¡Explorando las nuevas features de React 19! El compilador es mágico. ✨ #React #Frontend", likes: 125, comments: 12, shares: 8, liked: false },
  { id: 2, author: "Carlos Gómez", username: "@carlos_design", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e", content: "El minimalismo no es una falta de algo. Es simplemente la cantidad perfecta de algo. ¿Qué opinan?", image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400&q=70&fm=webp", likes: 350, comments: 45, shares: 22, liked: true },
];

const mockComments = [
    {id: 1, author: "Juan", avatar: "https://i.pravatar.cc/150?u=juan", content: "¡Totalmente de acuerdo!"},
    {id: 2, author: "Ana", avatar: "https://i.pravatar.cc/150?u=ana", content: "Buena perspectiva, nunca lo había pensado así."}
]

const PostPage = () => {
  const { id } = useParams();
  const post = mockPosts.find(p => p.id === Number(id));
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if(!newComment.trim()) return;
    const newCommentObj = {
        id: Date.now(),
        author: "Lucio",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
        content: newComment
    };
    setComments([newCommentObj, ...comments]);
    setNewComment("");
  }
  
  if (!post) return <div>Post no encontrado</div>;

  return (
    <div className="space-y-6">
        <Button asChild variant="outline">
             <Link to="/demo/social"><ArrowLeft className="mr-2 h-4 w-4" /> Volver al Feed</Link>
        </Button>
        <Card>
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
                <p className="mt-2">{post.content}</p>
                {post.image && <img src={post.image} alt="Post content" className="mt-4 rounded-lg border" />}
                </div>
            </div>
            <div className="flex justify-around mt-4 pt-4 border-t">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Heart size={18} className={post.liked ? 'text-red-500 fill-red-500' : ''} /> {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <MessageSquare size={18} /> {post.comments}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Share2 size={18} /> {post.shares}
                </Button>
            </div>
            </CardContent>
        </Card>
        
        <Card>
            <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Comentarios</h3>
                <div className="flex gap-4 mb-4">
                    <Avatar>
                        <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704f" />
                        <AvatarFallback>LC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <Textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Escribe un comentario..." />
                        <Button onClick={handleAddComment} className="mt-2">Comentar</Button>
                    </div>
                </div>
                <div className="space-y-4">
                    {comments.map(c => (
                         <div key={c.id} className="flex gap-4">
                            <Avatar>
                                <AvatarImage src={c.avatar} />
                                <AvatarFallback>{c.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="p-3 rounded-lg bg-muted flex-1">
                                <p className="font-semibold text-sm">{c.author}</p>
                                <p>{c.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>

    </div>
  );
};

export default PostPage;
