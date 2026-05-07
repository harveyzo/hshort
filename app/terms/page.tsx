import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'

export const metadata = {
  title: '用户协议 - 短剧平台',
  description: '了解使用我们服务的条款和条件',
}

export default function Terms() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">用户协议</h1>
              <p className="text-foreground/60">最后更新于 2024 年 5 月</p>
            </div>

            <div className="space-y-8 text-foreground/90">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. 条款的接受</h2>
                <p>
                  通过访问和使用短剧平台（www.shortdrama.com 及其关联应用，以下简称"平台"），您同意受本用户协议和我们的隐私政策约束。如果您不同意这些条款，请勿使用我们的服务。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. 使用许可</h2>
                <p className="mb-4">
                  我们向您授予有限的、非独占的、不可转让的、可随时撤销的许可证，以个人、非商业的方式访问和使用平台。您不得：
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                  <li>复制、分发、修改或传输任何内容或代码</li>
                  <li>尝试获取平台的任何源代码</li>
                  <li>使用自动化工具抓取或爬取平台内容</li>
                  <li>进行任何可能损害平台的活动</li>
                  <li>冒充他人或对您的身份进行虚假陈述</li>
                  <li>骚扰、威胁或骂其他用户</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. 用户账户</h2>
                <p className="mb-4">
                  创建账户时，您必须提供真实、准确、完整的信息。您负责维护账户密码的保密性，以及发生在您账户下的所有活动的责任。您同意立即通知我们任何未经授权的账户使用。
                </p>
                <p>
                  我们保留在任何时候因任何原因（包括但不限于违反本协议）暂停或终止您的账户的权利。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. 用户生成的内容</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.1 所有权</h3>
                    <p>
                      您保留对您上传到平台的所有内容的所有权。通过上传内容，您授予我们在全球范围内、免版税、非独占的许可证，可以使用、复制、分发、修改和公开展示您的内容，以提供和推广平台的服务。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.2 责任和标准</h3>
                    <p>
                      您对您的内容负全部责任。您保证您的内容：
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2 mt-2">
                      <li>不违反任何法律或法规</li>
                      <li>不侵犯任何第三方的知识产权、隐私或其他权利</li>
                      <li>不包含骚扰、威胁、仇恨、色情或其他有害内容</li>
                      <li>不是虚假或误导性的</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.3 内容审核</h3>
                    <p>
                      我们有权审核、修改或删除违反本条款的内容，无须提前通知。我们也可能暂停或终止违反政策的用户的账户。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. 知识产权</h2>
                <p className="mb-4">
                  平台上的所有内容，包括文本、图形、徽标、图像、音频、视频和软件，均属于短剧平台或其内容提供商，并受版权、商标和其他知识产权法律的保护。您不得使用任何内容而未获得明确的书面许可。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. 变现和支付</h2>
                <div className="space-y-4">
                  <p>
                    平台提供多种变现方式，包括广告收益分享、粉丝打赏和品牌合作机会。
                  </p>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6.1 资格要求</h3>
                    <p>
                      并非所有账户都有资格获得变现功能。我们可能会根据粉丝数、内容质量、社区准则遵守情况等因素设置资格要求。
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6.2 支付条款</h3>
                    <p>
                      我们通常每月结算一次。最低提现金额为人民币 100 元。我们保留对支付条款的修改权。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. 免责声明</h2>
                <p className="mb-4">
                  平台按"现状"提供，我们不做任何明示或暗示的保证。我们不保证：
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                  <li>服务将不中断或无错误</li>
                  <li>缺陷会被更正</li>
                  <li>服务不包含病毒或有害成分</li>
                  <li>您的内容将产生任何特定的收入或观看量</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. 责任限制</h2>
                <p>
                  在任何情况下，短剧平台、其所有者、员工或内容提供商都不对任何间接、附带、特殊或后果性的损害赔偿责任，包括但不限于数据丢失、收入损失或业务中断，即使已被告知此类损害的可能性。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. 第三方链接和内容</h2>
                <p>
                  平台可能包含指向第三方网站的链接。我们不对第三方内容负责，访问第三方网站由您自行承担风险。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. 禁止内容</h2>
                <p className="mb-4">您同意不上传、发布或分享以下内容：</p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-2">
                  <li>暴力、色情或明确内容</li>
                  <li>仇恨言论或歧视性内容</li>
                  <li>侵犯隐私或虐待他人的内容</li>
                  <li>欺诈、欺骗或垃圾内容</li>
                  <li>宣传非法活动或物质的内容</li>
                  <li>侵犯版权或其他知识产权的内容</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. 社区准则</h2>
                <p>
                  我们致力于维持尊重和安全的社区。骚扰、威胁、性骚扰或鼓励暴力的用户将被移除或被禁止。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. 与法律有关</h2>
                <p className="mb-4">
                  如果任何条款被认定为无效或不可执行，则该条款应在允许的范围内进行修改，或如果不可修改，则应撤销，但不影响任何其他条款的有效性。
                </p>
                <p>
                  本协议受中华人民共和国法律管辖。任何争议应在北京仲裁委员会进行仲裁。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. 终止</h2>
                <p>
                  我们可能在任何时候以任何原因或无原因终止您对平台的访问，无须通知或责任。在终止时，您对内容的许可也将终止。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. 协议的修改</h2>
                <p>
                  我们保留随时修改本协议的权利。修改后的条款将在本页面发布，您继续使用平台将被视为接受修改。
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">15. 联系我们</h2>
                <p>
                  如果您对本用户协议有任何疑问，请通过以下方式与我们联系：
                </p>
                <div className="bg-secondary/30 rounded-lg p-6 mt-4 space-y-2 text-foreground/80">
                  <p>邮箱：<a href="mailto:support@shortdrama.com" className="text-primary hover:text-primary/80">support@shortdrama.com</a></p>
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
