'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CreatePostModalProps {
    topics: Array<{ id: string; slug: string; description: string }>;
    isOpen: boolean;
    onClose: () => void;
}

export default function CreatePostModal({ topics, isOpen, onClose }: CreatePostModalProps) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim() || !selectedTopic) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title.trim(),
                    content: content.trim(),
                    topicId: selectedTopic,
                }),
            });

            if (response.ok) {
                const post = await response.json();
                router.push(`/posts/${post.id}`);
                onClose();
                setTitle('');
                setContent('');
                setSelectedTopic('');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl backdrop-blur-md bg-gray-900/90 border border-gray-800/50 rounded-xl shadow-2xl">
                <div className="p-6 border-b border-gray-800/50">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Yeni Post Oluştur</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Konu Seç
                        </label>
                        <select
                            value={selectedTopic}
                            onChange={(e) => setSelectedTopic(e.target.value)}
                            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                            required
                        >
                            <option value="">Bir konu seçin...</option>
                            {topics.map((topic) => (
                                <option key={topic.id} value={topic.id}>
                                    {topic.slug}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Başlık
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Post başlığınızı yazın..."
                            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            İçerik
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Post içeriğinizi yazın..."
                            rows={6}
                            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                        >
                            İptal
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting || !title.trim() || !content.trim() || !selectedTopic}
                            className="bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Paylaşılıyor...' : 'Paylaş'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}