import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">▶</span>
              </div>
              <span className="font-bold text-foreground">短剧平台</span>
            </div>
            <p className="text-foreground/60 text-sm">
              专业的短剧内容创作和分发平台
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">产品</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#features" className="text-foreground/60 hover:text-foreground transition-colors">功能介绍</Link></li>
              <li><Link href="#pricing" className="text-foreground/60 hover:text-foreground transition-colors">价格方案</Link></li>
              <li><Link href="#faq" className="text-foreground/60 hover:text-foreground transition-colors">常见问题</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">法律</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-foreground/60 hover:text-foreground transition-colors">隐私政策</Link></li>
              <li><Link href="/terms" className="text-foreground/60 hover:text-foreground transition-colors">用户协议</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">联系方式</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>邮箱: info@shortdrama.com</li>
              <li>电话: +86 10 1234 5678</li>
              <li>地址: 北京市朝阳区</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/50 text-sm">
              © {currentYear} 短剧平台. 保留所有权利。
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-foreground/50 hover:text-foreground transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-foreground/50 hover:text-foreground transition-colors text-sm">
                WeChat
              </a>
              <a href="#" className="text-foreground/50 hover:text-foreground transition-colors text-sm">
                Douyin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
