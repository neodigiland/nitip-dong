import { useState, useEffect } from 'react';

interface Review {
  id: string;
  name: string;
  university: string;
  rating: number;
  content: string;
  photoUrl: string;
  createdAt: string;
}

const STORAGE_KEY = 'nitip_dong_reviews';

export default function AdminReview() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    rating: 5,
    content: '',
    photoUrl: '',
  });

  // Load reviews from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, []);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing) {
      // Update existing review
      setReviews(prev => prev.map(r => 
        r.id === isEditing 
          ? { ...r, ...formData }
          : r
      ));
      setIsEditing(null);
    } else {
      // Add new review
      const newReview: Review = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString(),
      };
      setReviews(prev => [...prev, newReview]);
    }
    
    // Reset form
    setFormData({
      name: '',
      university: '',
      rating: 5,
      content: '',
      photoUrl: '',
    });
  };

  const handleEdit = (review: Review) => {
    setIsEditing(review.id);
    setFormData({
      name: review.name,
      university: review.university,
      rating: review.rating,
      content: review.content,
      photoUrl: review.photoUrl,
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Yakin ingin menghapus review ini?')) {
      setReviews(prev => prev.filter(r => r.id !== id));
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
    setFormData({
      name: '',
      university: '',
      rating: 5,
      content: '',
      photoUrl: '',
    });
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(reviews, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportName = `reviews_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportName);
    linkElement.click();
  };

  const renderStars = (count: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? 'button' : undefined}
            onClick={interactive ? () => handleRatingChange(star) : undefined}
            className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
            disabled={!interactive}
          >
            <span 
              className={`material-symbols-outlined text-xl ${
                star <= count ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'
              }`}
            >
              {star <= count ? 'star' : 'star'}
            </span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-3xl text-primary">admin_panel_settings</span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Admin Panel - Review Pelanggan
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            Kelola review dan testimoni pelanggan yang akan ditampilkan di website.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  {isEditing ? 'edit' : 'add_circle'}
                </span>
                {isEditing ? 'Edit Review' : 'Tambah Review Baru'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Nama Pelanggan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Contoh: Andi Pratama"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* University */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Universitas/Institusi <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    required
                    placeholder="Contoh: Mahasiswa UI"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Rating
                  </label>
                  <div className="flex items-center gap-3">
                    {renderStars(formData.rating, true)}
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      ({formData.rating}/5)
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Isi Review <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Tulis testimoni pelanggan di sini..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Photo URL */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    URL Foto (Opsional)
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    value={formData.photoUrl}
                    onChange={handleInputChange}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary-dark text-[#0d1b0d] font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {isEditing ? 'save' : 'add'}
                    </span>
                    {isEditing ? 'Simpan Perubahan' : 'Tambah Review'}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      Batal
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Reviews List Section */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
              {/* List Header */}
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">format_list_bulleted</span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Daftar Review ({reviews.length})
                  </h2>
                </div>
                {reviews.length > 0 && (
                  <button
                    onClick={handleExportJSON}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm font-medium"
                  >
                    <span className="material-symbols-outlined text-lg">download</span>
                    Export JSON
                  </button>
                )}
              </div>

              {/* Reviews List */}
              {reviews.length === 0 ? (
                <div className="p-12 text-center">
                  <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4 block">
                    rate_review
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-lg">
                    Belum ada review. Mulai tambahkan review pertama!
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {reviews.map((review) => (
                    <div key={review.id} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                      <div className="flex gap-4">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                            {review.photoUrl ? (
                              <img 
                                src={review.photoUrl} 
                                alt={review.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-400">
                                <span className="material-symbols-outlined">person</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="font-bold text-slate-900 dark:text-white">
                                {review.name}
                              </h3>
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                {review.university}
                              </p>
                            </div>
                            {renderStars(review.rating)}
                          </div>
                          <p className="mt-3 text-slate-600 dark:text-slate-300 italic">
                            "{review.content}"
                          </p>
                          <div className="mt-4 flex items-center gap-4">
                            <span className="text-xs text-slate-400">
                              {new Date(review.createdAt).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleEdit(review)}
                                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                              >
                                <span className="material-symbols-outlined text-lg">edit</span>
                                Edit
                              </button>
                              <button
                                onClick={() => handleDelete(review.id)}
                                className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                              >
                                <span className="material-symbols-outlined text-lg">delete</span>
                                Hapus
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Preview Card */}
            {reviews.length > 0 && (
              <div className="mt-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">preview</span>
                  Preview Tampilan di Website
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {reviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="rounded-xl bg-background-light dark:bg-background-dark p-6 shadow-sm border border-slate-100 dark:border-slate-700">
                      <div className="flex gap-1 text-yellow-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="material-symbols-outlined text-sm">
                            {i < review.rating ? 'star' : 'star_half'}
                          </span>
                        ))}
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 italic text-sm">
                        "{review.content.length > 100 ? review.content.substring(0, 100) + '...' : review.content}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                          {review.photoUrl ? (
                            <img src={review.photoUrl} alt={review.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                              <span className="material-symbols-outlined text-sm">person</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white">{review.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{review.university}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
