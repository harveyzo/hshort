import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: '隐私政策 - 短剧平台',
  description: '了解我们如何保护您的隐私和个人信息',
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Link href="/" className="text-primary hover:text-primary/80 mb-4 inline-flex items-center gap-2">
                <span>←</span> 返回首页
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">隐私政策</h1>
              <p className="text-foreground/60">最后更新于 2024 年 5 月</p>
            </div>

            <div className="space-y-8 text-foreground/90">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. 引言</h2>
                <p>
                  短剧平台（以下简称"我们"或"公司"）致力于保护您的隐私。本隐私政策解释了我们如何收集、使用、披露和保护您的个人信息，以及您对您的数据所拥有的权利。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. 我们收集的信息</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.1 您直接提供的信息</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                      <li>账户信息：姓名、邮箱地址、电话号码、密码</li>
                      <li>个人资料：头像、个人简介、创作者认证信息</li>
                      <li>内容数据：您上传的视频、文字、图片等创意内容</li>
                      <li>交易信息：支付信息、账单历史、变现记录</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.2 自动收集的信息</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                      <li>设备信息：设备类型、操作系统、浏览器类型</li>
                      <li>使用情况：页面访问、点击行为、观看时长、搜索查询</li>
                      <li>位置数据：IP 地址、大致地理位置（非精准）</li>
                      <li>Cookies 和类似技术</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. 信息的使用</h2>
                <p className="mb-4">我们使用收集的信息用于以下目的：</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                  <li>提供和改进我们的服务</li>
                  <li>管理您的账户和处理交易</li>
                  <li>发送服务更新、安全警告和支持信息</li>
                  <li>响应您的询问和支持请求</li>
                  <li>进行数据分析和用户研究</li>
                  <li>个性化您的体验</li>
                  <li>检测和防止欺诈、滥用和安全问题</li>
                  <li>遵守法律和监管要求</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. 信息共享</h2>
                <p className="mb-4">
                  我们不会将您的个人信息出售、出租或出借给任何第三方。我们仅在以下情况下与第三方共享您的信息：
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                  <li>服务提供商：协助我们提供、维护和改进服务</li>
                  <li>内容分发伙伴：根据您的授权，分发您的内容到其他平台</li>
                  <li>法律要求：遵守法律程序或政府要求</li>
                  <li>保护权利：保护我们和用户的权利、隐私、安全和财产</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. 数据安全</h2>
                <p>
                  我们采取适当的技术和组织措施来保护您的个人信息，防止未经授权的访问、更改、披露或销毁。这些措施包括加密、访问控制和定期安全审计。但请注意，互联网上的传输永远不能 100% 安全。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. 数据保留</h2>
                <p>
                  我们将保留您的个人信息，只要您的账户活跃或完成交易所必需。您可以随时要求删除您的账户和关联数据，除非我们有法律义务保留这些信息。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. 您的权利</h2>
                <p className="mb-4">根据适用法律，您可能有权：</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                  <li>访问我们持有的关于您的个人信息</li>
                  <li>更正不准确或不完整的信息</li>
                  <li>删除您的个人信息</li>
                  <li>限制我们对您的信息的处理</li>
                  <li>以可读格式获取您的数据副本</li>
                  <li>反对某些处理活动</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies</h2>
                <p>
                  我们使用 Cookies 和类似的追踪技术来记住您的偏好、理解您如何使用我们的服务，并改进我们的产品。您可以通过浏览器设置控制 Cookies，但这可能会影响您使用我们服务的某些功能。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. 未成年人</h2>
                <p>
                  我们的服务不适用于 18 岁以下的个人。我们不会有意收集未成年人的个人信息。如果我们发现已经收集了未成年人的信息，我们将立即删除它。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. 隐私政策的更新</h2>
                <p>
                  我们可能不时更新本隐私政策。重大更改将通过在本页面上发布新的政策版本，并更新"最后更新于"日期来通知。您继续使用我们的服务表示接受更新的政策。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. 联系我们</h2>
                <p>
                  如果您对本隐私政策有任何疑问，或希望行使您的数据权利，请通过以下方式与我们联系：
                </p>
                <div className="bg-secondary/30 rounded-lg p-6 mt-4 space-y-2 text-foreground/80">
                  <p>邮箱：<a href="mailto:privacy@shortdrama.com" className="text-primary hover:text-primary/80">privacy@shortdrama.com</a></p>
                  <p>邮寄地址：北京市朝阳区</p>
                  <p>电话：+86 10 1234 5678</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
