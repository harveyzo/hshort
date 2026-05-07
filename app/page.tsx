import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                ✨ 短剧内容创作平台
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
                创意短剧，精彩呈现
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto text-balance mb-8">
                我们是专业的短剧内容平台，为创作者提供完整的制作、发行和变现解决方案，让您的创意故事触达千万观众。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  开始创作
                </button>
                <button className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors">
                  了解更多
                </button>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
                <div className="relative z-10 text-center">
                  <svg className="w-20 h-20 mx-auto text-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p className="text-foreground/40">短剧展示区域</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">核心功能</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                完整的短剧制作和分发工具，让您专注于创意
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎬',
                  title: '专业制作工具',
                  description: '支持4K高清制作，内置丰富的特效和滤镜库，让每一部作品都精彩纷呈。'
                },
                {
                  icon: '📱',
                  title: '多平台发行',
                  description: '一键分发到各大短视频平台，实现内容的最大化曝光和触达。'
                },
                {
                  icon: '💰',
                  title: '灵活变现',
                  description: '多种变现方式，包括广告收益、粉丝打赏和品牌合作。'
                },
                {
                  icon: '📊',
                  title: '数据分析',
                  description: '实时追踪内容表现，了解观众行为，优化创作策略。'
                },
                {
                  icon: '🤝',
                  title: '创意共享',
                  description: '与其他创作者协作，共同创意发想，合力打造精品内容。'
                },
                {
                  icon: '🎓',
                  title: '专业培训',
                  description: '定期更新的创作教程和行业动态，帮助您不断提升专业能力。'
                }
              ].map((feature, index) => (
                <div key={index} className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">创作流程</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
              {[
                { step: 1, title: '创意策划', desc: '规划故事框架' },
                { step: 2, title: '内容制作', desc: '拍摄和后期制作' },
                { step: 3, title: '审核发行', desc: '平台审核并发行' },
                { step: 4, title: '数据变现', desc: '追踪数据和收益' }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-xl p-6 border border-border text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground/60 text-sm">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: '活跃创作者', value: '10,000+' },
                { label: '发布短剧数', value: '50,000+' },
                { label: '累计播放量', value: '10亿+' },
                { label: '变现总额', value: '1亿+' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">准备好开始了吗？</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              加入我们的社区，与千万内容创作者一起，用创意改变世界。
            </p>
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg">
              免费注册账户
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
