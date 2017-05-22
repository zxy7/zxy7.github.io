/**
 * description 这个是项目的默认首页
 */
import { Component } from 'react'
import { Link } from 'react-router'
class DairyInf extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0,
			h1: '下一代 Web 应用模型 —— Progressive Web App',
			h2: 'The Next Generation Application Model For The Web - Progressive Web App',
			autor:'Posted by Hux on February 9, 2017',
		};
	}

	render() {

		return (
			<div id="post">
				<header className="intro-header" style={{ backgroundImage: " url('/image/pic12.jpg')" }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 ">
								<div className="site-heading" style={{ textAlign: 'left',paddingLeft:'10px'}}>
									<div className="tags">
										<a className="tag" href="/tags/#前端开发" title="前端开发">前端开发</a>
										<a className="tag" href="/tags/#JavaScript" title="JavaScript">JavaScript</a>
									</div>
									<h1 style={{ width: '100%', fontSize: '30px', color: 'white' }}>
										{this.state.h1}
									</h1>
									<h2 style={{
										width: '100%',
										lineHeight: '1.4', fontWeight: '400',
										margin: ' 10px 0 30px', marginTop: '-5px',
										fontSize: '17px', color: 'white'
									}}>
										{this.state.h2}
									</h2>
									<span className="meta">{this.state.autor}</span>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="row" style={{padding:'16px',maxWidth:'750px',margin:'0 auto'}}>
					<div className="zh post-container" style={{display:"block"}}>
<div className=" post-container">

<h2 id="下一代-web-应用">下一代 Web 应用？<a className="anchorjs-link " href="#下一代-web-应用" aria-label="Anchor link for: 下一代 web 应用" data-anchorjs-icon="#" style={{opacity:' 1', paddingLeft:' 0.375em'}}></a></h2>

<p>近年来，Web 应用在整个软件与互联网行业承载的责任越来越重，软件复杂度和维护成本越来越高，Web 技术，尤其是 Web 客户端技术，迎来了爆发式的发展。</p>

<p>包括但不限于基于 Node.js 的前端工程化方案；诸如 Webpack、Rollup 这样的打包工具；Babel、PostCSS 这样的转译工具；TypeScript、Elm 这样转译至 JavaScript 的编程语言；React、Angular、Vue 这样面向现代 web 应用需求的前端框架及其生态，也涌现出了像<a href="http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/" title="Isomorphic JavaScript: The Future of Web Apps">同构 JavaScript</a>与<a href="https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.unrzyz3b2" title="Universal JavaScript">通用 JavaScript 应用</a>这样将服务器端渲染（Server-side Rendering）与单页面应用模型（Single-page App）结合的 web 应用架构方式，可以说是百花齐放。</p>

<p>但是，Web 应用在移动时代并没有达到其在桌面设备上流行的程度。究其原因，尽管上述的各种方案已经充分利用了现有的 JavaScript 计算能力、CSS 布局能力、HTTP 缓存与浏览器 API 对当代基于 <a href="https://en.wikipedia.org/wiki/Ajax_(programming)" title="Ajax - Wikipedia">Ajax</a> 与<a href="https://en.wikipedia.org/wiki/Responsive_web_design" title="Responsive Web Design - Wikipedia">响应式设计</a>的 web 应用模型的性能与体验带来了工程角度的巨大突破，我们仍然无法在不借助原生程序辅助浏览器的前提下突破 web 平台本身对 web 应用固有的桎梏：<strong>客户端软件（即网页）需要下载所带来的网络延迟；与 Web 应用依赖浏览器作为入口所带来的体验问题。</strong></p>

<p><img src="/img/in-post/post-nextgen-web-pwa/PWAR-007.jpeg" alt=""/>
<em>Web 与原生应用在移动平台上的使用时长对比 <a href="https://developers.google.com/web/events/pwaroadshow/">图片来源: Google</a></em></p>

<p>在桌面设备上，由于网络条件稳定，屏幕尺寸充分，交互方式趋向于多任务，这两点造成的负面影响对比 web 应用免于安装、随叫随到、无需更新等优点，瑕不掩瑜。但是在移动时代，脆弱的网络连接与全新的人机交互方式使得这两个问题被无限放大，严重制约了 web 应用在移动平台的发展。在用户眼里，原生应用不会出现「白屏」，清一色都摆在主屏幕上；而 web 应用则是浏览器这个应用中的应用，使用起来并不方便，而且加载也比原生应用要慢。</p>

<p>Progressive Web Apps（以下简称 PWA）以及构成 PWA 的一系列关键技术的出现，终于让我们看到了彻底解决这两个平台级别问题的曙光：能够显著提高应用加载速度、甚至让 web 应用可以在离线环境使用的 Service Worker 与 Cache Storage；用于描述 web 应用元数据（metadata）、让 web 应用能够像原生应用一样被添加到主屏、全屏执行的 Web App Manifest；以及进一步提高 web 应用与操作系统集成能力，让 web 应用能在未被激活时发起推送通知的 Push API 与 Notification API 等等。</p>

<p>将这些技术组合在一起会是怎样的效果呢？「印度阿里巴巴」 —— <a href="https://en.wikipedia.org/wiki/Flipkart" title="Flipkart - wikipedia">Flipkart</a> 在 2015 年一度关闭了自己的移动端网站，却在年底发布了现在最为人津津乐道的 PWA 案例 <em>FlipKart Lite</em>，成为世界上第一个支撑大规模业务的 PWA。发布的一周后它就亮相于 <a href="https://youtu.be/m2a9hlUFRhg" title="Keynote (Chrome Dev Summit 2015)">Chrome Dev Summit 2015</a> 上，笔者当时就被惊艳到了。为了方便各媒介上的读者观看，笔者做了几幅图方便给大家介绍：</p>

<p><img src="/img/in-post/post-nextgen-web-pwa/flipkart-1.jpeg" alt=""/>
<em>图片来源: Hux &amp; <a href="https://medium.com/@AdityaPunjani/building-flipkart-lite-a-progressive-web-app-2c211e641883#.hz4d3kw41" title="Building Flipkart Lite: A Progressive Web App">Medium.com</a></em></p>

<p>当浏览器发现用户<a href="https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/?hl=en" title="Web App Install Banners - Google Developer">需要</a> Flipkart Lite 时，它就会提示用户「嘿，你可以把它添加至主屏哦」（用户也可以手动添加）。这样，Flipkart Lite 就会像原生应用一样在主屏上留下一个自定义的 icon 作为入口；与一般的书签不同，当用户点击 icon 时，Flipkat Lite 将直接全屏打开，不再受困于浏览器的 UI 中，而且有自己的启动屏效果。</p>

<p><img src="/img/in-post/post-nextgen-web-pwa/flipkart-2.jpeg" alt=""/>
<em>图片来源: Hux &amp; <a href="https://medium.com/@AdityaPunjani/building-flipkart-lite-a-progressive-web-app-2c211e641883#.hz4d3kw41" title="Building Flipkart Lite: A Progressive Web App">Medium.com</a></em></p>

<p>更强大的是，在无法访问网络时，Flipkart Lite 可以像原生应用一样照常执行，还会很骚气的变成黑白色；不但如此，曾经访问过的商品都会被缓存下来得以在离线时继续访问。在商品降价、促销等时刻，Flipkart Lite 会像原生应用一样发起推送通知，吸引用户回到应用。</p>

<p><strong>无需担心网络延迟；有着独立入口与独立的保活机制。</strong>之前两个问题的一并解决，宣告着 web 应用在移动设备上的浴火重生：满足 PWA 模型的 web 应用，将逐渐成为移动操作系统的一等公民，并将向原生应用发起挑战与「复仇」。</p>

<p>更令笔者兴奋的是，就在今年 11 月的 <a href="https://youtu.be/eI3B6x0fw9s" title="Keynote (Chrome Dev Summit 2016)">Chrome Dev Summit 2016</a> 上，Chrome 的工程 VP Darin Fisher 介绍了 Chrome 团队正在做的一些实验：把「添加至主屏」重命名为「安装」，被安装的 PWA 不再仅以 widget 的形式显示在桌面上，而是真正做到与所有原生应用平级，一样被收纳进应用抽屉（App Drawer）里，一样出现在系统设置中 🎉🎉🎉。</p>

<p><img src="/img/in-post/post-nextgen-web-pwa/flipkart-3.jpeg" alt=""/>
<em>图片来源: Hux &amp; <a href="https://twitter.com/adityapunjani">@adityapunjani</a></em></p>

<p>图中从左到右分别为：类似原生应用的安装界面；被收纳在应用抽屉里的 Flipkart Lite 与 Hux Blog；设置界面中并列出现的 Flipkart 原生应用与 Flipkart Lite PWA （可以看到 PWA 巨大的体积优势）</p>

<p><strong>笔者相信，PWA 模型将继约 20 年前横空出世的 Ajax 与约 10 年前风靡移动互联网的响应式设计之后，掀起 web 应用模型的第三次根本性革命，将 web 应用带进一个全新的时代。</strong></p>

<h2 id="pwa-关键技术的前世今生">PWA 关键技术的前世今生<a className="anchorjs-link " href="#pwa-关键技术的前世今生" aria-label="Anchor link for: pwa 关键技术的前世今生" data-anchorjs-icon="#" style={{opacity: '1', paddingLeft:' 0.375em'}}></a></h2>

<h3 id="web-app-manifest"><a href="https://w3c.github.io/manifest/#use-cases-and-requirements" title="Web App Manifest">Web App Manifest</a><a className="anchorjs-link " href="#web-app-manifest" aria-label="Anchor link for: web app manifest" data-anchorjs-icon="#" style={{opacity: '1', paddingLeft:' 0.375em'}}></a></h3>

<p>Web App Manifest，即通过一个清单文件向浏览器暴露 web 应用的元数据，包括名字、icon 的 URL 等，以备浏览器使用，比如在添加至主屏或推送通知时暴露给操作系统，从而增强 web 应用与操作系统的集成能力。</p>

<p>让 web 应用在移动设备上的体验更接近原生应用的尝试其实早在 2008 年的 <a href="https://huangxuan.me/pwa-qcon2016/#/37" title="PWA@QCon2016 #37">iOS 1.1.3 与 iOS 2.1.0 </a>时就开始了，它们分别为 web 应用增加了对自定义 icon 和全屏打开的支持。</p>

<p><img src="/img/in-post/post-nextgen-web-pwa/ios2-a2hs.gif" alt=""/>
<em>图片来源: <a href="http://appleinsider.com/articles/08/10/03/latest_iphone_software_supports_full_screen_web_apps.html">appleinsider.com</a></em></p>

<p>但是很快，随着越来越多的私有平台通过 <code className="highlighter-rouge">&lt;meta&gt;</code>/<code className="highlighter-rouge">&lt;link&gt;</code> 标签来为 web 应用添加「私货」，<code className="highlighter-rouge">&lt;head&gt;</code> 很快就被塞满了：</p>

<div className="language-html highlighter-rouge"><pre className="highlight"><code><span className="c">&lt;!-- Add to homescreen for Safari on iOS --&gt;</span>
<span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"apple-mobile-web-app-capable"</span> <span className="na">content=</span><span className="s">"yes"</span><span className="nt">&gt;</span>
<span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"apple-mobile-web-app-status-bar-style"</span> <span className="na">content=</span><span className="s">"black"</span><span className="nt">&gt;</span>
<span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"apple-mobile-web-app-title"</span> <span className="na">content=</span><span className="s">"Lighten"</span><span className="nt">&gt;</span>

<span className="c">&lt;!-- Add to homescreen for Chrome on Android --&gt;</span>
<span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"mobile-web-app-capable"</span> <span className="na">content=</span><span className="s">"yes"</span><span className="nt">&gt;</span>
<span className="nt">&lt;mate</span> <span className="na">name=</span><span className="s">"theme-color"</span> <span className="na">content=</span><span className="s">"#000000"</span><span className="nt">&gt;</span>

<span className="c">&lt;!-- Icons for iOS and Android Chrome M31~M38 --&gt;</span>
<span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"apple-touch-icon-precomposed"</span> <span className="na">sizes=</span><span className="s">"144x144"</span> <span className="na">href=</span><span className="s">"images/touch/apple-touch-icon-144x144-precomposed.png"</span><span className="nt">&gt;</span>
<span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"apple-touch-icon-precomposed"</span> <span className="na">sizes=</span><span className="s">"114x114"</span> <span className="na">href=</span><span className="s">"images/touch/apple-touch-icon-114x114-precomposed.png"</span><span className="nt">&gt;</span>
<span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"apple-touch-icon-precomposed"</span> <span className="na">sizes=</span><span className="s">"72x72"</span> <span className="na">href=</span><span className="s">"images/touch/apple-touch-icon-72x72-precomposed.png"</span><span className="nt">&gt;</span>
<span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"apple-touch-icon-precomposed"</span> <span className="na">href=</span><span className="s">"images/touch/apple-touch-icon-57x57-precomposed.png"</span><span className="nt">&gt;</span>

<span className="c">&lt;!-- Icon for Android Chrome, recommended --&gt;</span>
<span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"shortcut icon"</span> <span className="na">sizes=</span><span className="s">"196x196"</span> <span className="na">href=</span><span className="s">"images/touch/touch-icon-196x196.png"</span><span className="nt">&gt;</span>

<span className="c">&lt;!-- Tile icon for Win8 (144x144 + tile color) --&gt;</span>
<span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"msapplication-TileImage"</span> <span className="na">content=</span><span className="s">"images/touch/ms-touch-icon-144x144-precomposed.png"</span><span className="nt">&gt;</span>
<span className="nt">&lt;meta</span> <span className="na">name=</span><span className="s">"msapplication-TileColor"</span> <span className="na">content=</span><span className="s">"#3372DF"</span><span className="nt">&gt;</span>

<span className="c">&lt;!-- Generic Icon --&gt;</span>
<span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"shortcut icon"</span> <span className="na">href=</span><span className="s">"images/touch/touch-icon-57x57.png"</span><span className="nt">&gt;</span>
</code></pre>
</div>

<p>显然，这种做法并不优雅：分散又重复的元数据定义多余且难以维持同步，与 html 耦合在一起也加重了浏览器检查元数据未来变动的成本。与此同时，社区里开始出现使用 manifest 文件以中心化地描述元数据的方案，比如 <a href="https://developer.chrome.com/extensions/manifest" title="Chrome Apps Manifest">Chrome Extension、 Chrome Hosted Web Apps (2010)</a> 与 <a href="https://developer.mozilla.org/en-US/docs/Archive/Firefox_OS/Firefox_OS_apps/Building_apps_for_Firefox_OS/Manifest" title="Firefox OS App Manifest">Firefox OS App Manifest (2011)</a> 使用 JSON；<a href="https://cordova.apache.org/docs/en/6.x/config_ref/index.html" title="Config.xml - Apache Cordova">Cordova</a> 与 <a href="https://msdn.microsoft.com/en-us/library/dn320426%28v=vs.85%29.aspx" title="Browser configuration schema reference - MSDN">Windows Pinned Site</a> 使用 XML；</p>

<p>2013 年，W3C WebApps 工作组开始对基于 JSON 的 Manifest 进行标准化，于同年年底发布<a href="https://www.w3.org/TR/2013/WD-appmanifest-20131217/" title="Manifest for web apps and bookmarks - First Public Working Draft">第一份公开 Working Draft</a>，并逐渐演化成为今天的 W3C Web App Manifest：</p>

<div className="language-html highlighter-rouge"><pre className="highlight"><code><span className="c">&lt;!-- document --&gt;</span>
<span className="nt">&lt;link</span> <span className="na">rel=</span><span className="s">"manifest"</span> <span className="na">href=</span><span className="s">"/manifest.json"</span><span className="nt">&gt;</span>
</code></pre>
</div>

<p>诸如 <code className="highlighter-rouge">name</code>、<code className="highlighter-rouge">icons</code>、<code className="highlighter-rouge">display</code> 都是我们比较熟悉的，而大部分新增的成员则为 web 应用带来了一系列以前 web 应用想做却做不到（或在之前只能靠 hack）的新特性：</p>

<ul>
  <li><code className="highlighter-rouge">scope</code>：定义了 web 应用的浏览作用域，比如作用域外的 URL 就会打开浏览器而不会在当前 PWA 里继续浏览。</li>
  <li><code className="highlighter-rouge">start_url</code>：定义了一个 PWA 的入口页面。比如说你添加 <a href="https://huangxuan.me" title="Hux Blog">Hux Blog</a> 的任何一个文章到主屏，从主屏打开时都会访问 <a href="https://huangxuan.me" title="Hux Blog">Hux Blog</a> 的主页。</li>
  <li><code className="highlighter-rouge">orientation</code>：终于，我们可以锁定屏幕旋转了（喜极而泣…）</li>
  <li><code className="highlighter-rouge">theme_color</code>/<code className="highlighter-rouge">background_color</code>：主题色与背景色，用于配置一些可定制的操作系统 UI 以提高用户体验，比如 Android 的状态栏、任务栏等。</li>
</ul>

<p>这个清单的成员还有很多，比如用于声明「对应原生应用」的 <code className="highlighter-rouge">related_applications</code> 等等，本文就不一一列举了。作为 PWA 的「户口本」，承载着 web 应用与操作系统集成能力的重任，Web App Manifest 还将在日后不断扩展，以满足 web 应用高速演化的需要。</p>

<h3 id="service-worker"><a href="https://w3c.github.io/ServiceWorker/" title="Service Worker">Service Worker</a><a className="anchorjs-link " href="#service-worker" aria-label="Anchor link for: service worker" data-anchorjs-icon="#" style={{opacity: '1', paddingLeft:' 0.375em'}}></a></h3>

<p>我们原有的整个 Web 应用模型，都是构建在「用户能上网」的前提之下的，所以一离线就只能玩小恐龙了。其实，对于「让 web 应用离线执行」这件事，Service Worker 至少是 web 社区的第三次尝试了。</p>

<p>故事可以追溯到 2007 年的 <a href="https://en.wikipedia.org/wiki/Google_Gears" title="Gears - Wikipedia">Google Gears</a>：为了让自家的 Gmail、Youtube、Google Reader 等 web 应用可以在本地存储数据与离线执行，Google 开发了一个浏览器拓展来增强 web 应用。Google Gears 支持 IE 6、Safari 3、Firefox 1.5 等浏览器；要知道，那一年 Chrome 都还没出生呢。</p>

<p>在 Gears API 中，我们通过向 LocalServer 模块提交一个缓存文件清单来实现离线支持：</p>

<div className="language-javascript highlighter-rouge"><pre className="highlight"><code><span className="c1">// Somewhere in your javascript</span>
<span className="kd">var</span> <span className="nx">localServer</span> <span className="o">=</span> <span className="nx">google</span><span className="p">.</span><span className="nx">gears</span><span className="p">.</span><span className="nx">factory</span><span className="p">.</span><span className="nx">create</span><span className="p">(</span><span className="s2">"bata.localserver"</span><span className="p">);</span>
<span className="kd">var</span> <span className="nx">store</span> <span className="o">=</span> <span className="nx">localServer</span><span className="p">.</span><span className="nx">createManagedStore</span><span className="p">(</span><span className="nx">STORE_NAME</span><span className="p">);</span>
<span className="nx">store</span><span className="p">.</span><span className="nx">manifestUrl</span> <span className="o">=</span> <span className="s2">"manifest.json"</span>
</code></pre>
</div>/
<p>是不是感到很熟悉？好像 <a href="https://www.w3.org/TR/2011/WD-html5-20110525/offline.html" title="HTML5 5.6 Offline Web Applications">HTML5 规范</a>中的 Application Cache 也是类似的东西？</p>

<div className="language-html highlighter-rouge"><pre className="highlight"><code><span className="nt">&lt;html</span> <span className="na">manifest=</span><span className="s">"cache.appcache"</span><span className="nt">&gt;</span>
</code></pre>
</div>
<div className="highlighter-rouge"><pre className="highlight"><code>CACHE MANIFEST

CACHE:
index.html
main.js
</code></pre>
</div>

<p>是的，Gears 的 LocalServer 就是后来大家所熟知的 App Cache 的前身，大约从 <a href="https://www.w3.org/TR/offline-webapps/" title="Offline Web Applications">2008</a> 年开始 W3C 就开始尝试将 Gears 进行标准化了；除了 LocalServer，Gears 中用于提供并行计算能力的 WorkerPool 模块与用于提供本地数据库与 SQL 支持的 Database 模块也分别是日后 Web Worker 与 Web SQL Database（后被废弃）的前身。</p>

<p>HTML5 App Cache 作为第二波「让 web 应用离线执行」的尝试，确实也服务了比如 Google Doc、尤雨溪早年作品 HTML5 Clear、以及一直用 web 应用作为自己 iOS 应用的 FT.com（Financial Times）等不少 web 应用。那么，还有 Service Worker 什么事呢？</p>

<p>是啊，如果 App Cache 没有被设计得<a href="https://huangxuan.me/sw-101-gdgdf/#/12" title="SW-101@DevFest #12">烂到完全不可编程、无法清理缓存、几乎没有路由机制、出了 Bug 一点救都没有</a>，可能就真没 Service Worker 什么事了。<a href="https://huangxuan.me/sw-101-gdgdf/#/13" title="SW-101@DevFest #13">App Cache 已经在前不久定稿的 HTML5.1 中被拿掉了，W3C 为了挽救 web 世界真是不惜把自己的脸都打肿了……</a></p>

<p>时至今日，我们终于迎来了 Service Worker 的曙光。简单来说，Service Worker 是一个可编程的 Web Worker，它就像一个位于浏览器与网络之间的客户端代理，可以拦截、处理、响应流经的 HTTP 请求；配合随之引入 Cache Storage API，你可以自由管理 HTTP 请求文件粒度的缓存，这使得 Service Worker 可以从缓存中向 web 应用提供资源，即使是在离线的环境下。</p>

<p><img src="/img/in-post/post-nextgen-web-pwa/sw-sw.png" alt=""/>
<em>Service Worker 就像一个运行在客户端的代理</em></p>

<p>比如说，我们可以给网页 <code className="highlighter-rouge">foo.html</code> 注册这么一个 Service Worker，它将劫持由 <code className="highlighter-rouge">foo.html</code> 发起的一切 HTTP 请求，并统统返回未设置 <code className="highlighter-rouge">Content-Type</code> 的 <code className="highlighter-rouge">Hello World!</code>：</p>
/

<p>Service Worker 第一次发布于 2014 年的 Google IO 上，目前已处于 W3C 工作草案的状态。其设计吸取了 Application Cache 的失败经验，作为 web 应用的开发者的你有着完全的控制能力；同时，它还借鉴了 Chrome 多年来在 Chrome Extension 上的设计经验（Chrome Background Pages 与 Chrome Event Pages），采用了基于「事件驱动」的唤醒机制，以大幅节省后台计算的能耗。比如上面的 <code className="highlighter-rouge">fetch</code> 其实就是会唤醒 Service Worker 的事件之一。</p>

<p><img src="/img/in-post/post-nextgen-web-pwa/sw-lifecycle.png" alt=""/>
<em>Service Worker 的生命周期</em></p>

<p>除了类似 <code className="highlighter-rouge">fetch</code> 这样的功能事件外，Service Worker 还提供了一组生命周期事件，包括安装、激活等等。比如，在 Service Worker 的「安装」事件中，我们可以把 web 应用所需要的资源统统预先下载并缓存到 Cache Storage 中去：</p>



<p>这样，当用户离线，网络无法访问时，我们就可以从缓存中启动我们的 web 应用：</p>

<p>可以看出，Service Worker 被设计为一个相对底层（low-level）、高度可编程、子概念众多，也因此异常灵活且强大的 API，故本文只能展示它的冰山一角。出于安全考虑，注册 Service Worker 要求你的 web 应用部署于 HTTPS 协议下，以免利用 Service Worker 的中间人攻击。笔者在今年 GDG 北京的 DevFest 上分享了 <a href="https://huangxuan.me/2016/11/20/sw-101-gdgdf/">Service Worker 101</a>，涵盖了 Service Worker 譬如「网络优先」、「缓存优先」、「网络与缓存比赛」这些更复杂的缓存策略、学习资料、以及<a href="https://github.com/Huxpro/sw-101-gdgdf">示例代码</a>，可以供大家参考。</p>

<p><img src="/img/in-post/post-nextgen-web-pwa/sw-race.png" alt=""/>
<em>Service Worker 的一种缓存策略：让网络请求与读取缓存比赛</em></p>

<p>你也可以尝试在支持 PWA 的浏览器中访问笔者的博客 <a href="https://huangxuan.me" title="Hux Blog">Hux Blog</a>，感受 Service Worker 的实际效果：所有访问过的页面都会被缓存并允许在离线环境下继续访问，所有未访问过的页面则会在离线环境下展示一个自定义的离线页面。</p>

<p>在笔者看来，<strong>Service Worker 对 PWA 的重要性相当于 <code className="highlighter-rouge">XMLHTTPRequest</code> 之于 Ajax，媒体查询（Media Query）之于响应式设计，是支撑 PWA 作为「下一代 web 应用模型」的最核心技术。</strong>由于 Service Worker 可以与包括 Indexed DB、Streams 在内的大部分 DOM 无关 API 进行交互，它的潜力简直无可限量。笔者几乎可以断言，Service Worker 将在未来十年里成为 web 客户端技术工程化的兵家必争之地，带来「离线优先（Offline-first）」的架构革命。</p>

<h3 id="push-notification">Push Notification<a className="anchorjs-link " href="#push-notification" aria-label="Anchor link for: push notification" data-anchorjs-icon="#" style={{opacity: '1', paddingLeft:' 0.375em'}}></a></h3>

<p>PWA 推送通知中的「推送」与「通知」，其实使用的是两个不同但又相得益彰的 API：</p>

<p><a href="https://notifications.spec.whatwg.org/" title="Notification API">Notification API</a> 相信大家并不陌生，它负责所有与通知本身相关的机制，比如通知的权限管理、向操作系统发起通知、通知的类型与音效，以及提供通知被点击或关闭时的回调等等，目前国内外的各大网站（尤其在桌面端）都有一定的使用。Notification API 最早应该是在 <a href="https://www.html5rocks.com/en/tutorials/notifications/quick/" title="Using the Notification API">2010</a> 年前后由 Chromium 提出<a href="https://www.chromium.org/developers/design-documents/desktop-notifications/api-specification" title="API Specification - The Chromium Projects">草案</a>以 <code className="highlighter-rouge">webkitNotifications</code> 前缀方式实现；随着 2011 年进入标准化；2012 年在 Safari 6（Mac OSX 10.8+）上获得支持；2015 年 Notification API 成为 <a href="https://www.w3.org/TR/notifications/" title="Web Notifications - W3C">W3C Recommendation</a>；2016 年 <a href="https://blogs.windows.com/msedgedev/2016/05/16/web-notifications-microsoft-edge/#2VBm890EjvAvUcgE.97">Edge 的支持</a>；Web Notifications 已经在桌面浏览器中获得了全面支持（Chrome、Edge、Firefox、Opera、Safari）的成就。</p>

<p><a href="https://w3c.github.io/push-api/" title="Push API">Push API</a> 的出现则让推送服务具备了向 web 应用推送消息的能力，它定义了 web 应用如何向推送服务发起订阅、如何响应推送消息，以及 web 应用、应用服务器与推送服务之间的鉴权与加密机制；由于 Push API 并不依赖 web 应用与浏览器 UI 存活，所以即使是在 web 应用与浏览器未被用户打开的时候，也可以通过后台进程接受推送消息并调用 Notification API 向用户发出通知。值得一提的是，Mac OSX 10.9 Mavericks 与 Safari 7 在 2013 年就发布了自己的私有推送支持，基于 APNS 的 <a href="https://developer.apple.com/notifications/safari-push-notifications/" title="Safari Push Notifications">Safari Push Notifications</a>。</p>


<p>对于 Push Notification，笔者的几次分享中一直都提的稍微少一些，一是因为 Push API 还处于 Editor Draft 的状态，二是目前浏览器与推送服务间的协议支持还不够成熟：Chrome（与其它基于 Blink 的浏览器）在 Chromium 52 之前只支持基于 Google 私有的 GCM/FCM 服务进行通知推送。不过好消息是，继 Firefox 44 之后，Chrome 52 与 Opera 39 也紧追其后实现了正在由 IETF 进行标准化的 <a href="https://tools.ietf.org/html/draft-ietf-webpush-protocol-12" title="Web Push Protocol">Web 推送协议（Web Push Protocol）</a>。</p>

<p>如果你已经在使用 Google 的云服务（比如 Firebase），并且主要面向的是海外用户，那么在 web 应用上支持基于 GCM/FCM 的推送通知并不是一件费力的事情，笔者推荐你阅读一下 Google Developers 的<a href="https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/" title="Web Push Notifications - Google Developer">系列文章</a>，很多国外公司已经玩起来了。</p>

<h2 id="从-hybrid-到-pwa从封闭到开放">从 Hybrid 到 PWA，从封闭到开放<a className="anchorjs-link " href="#从-hybrid-到-pwa从封闭到开放" aria-label="Anchor link for: 从 hybrid 到 pwa从封闭到开放" data-anchorjs-icon="#" style={{opacity: '1', paddingLeft:' 0.375em'}}></a></h2>

<p>2008 年，当移动时代来临，<a href="https://huangxuan.me/pwa-qcon2016/#/17" title="PWA@QCon2016 #17">唱衰移动 Web 的声音</a>开始出现，而浏览器的进化并不能跟上时，来自 Nitobi 的 Brian Leroux 等人创造了 <a href="https://cordova.apache.org/" title="Apache Cordova">Phonegap</a>，希望它能以 Polyfill 的形式、弥补目前浏览器与移动设备间的「鸿沟」，从此开启了<a href="https://en.wikipedia.org/wiki/Progressive_web_app#Hybrid_Apps">混合应用（Hybrid Apps）</a>的时代。</p>

<p>几年间，<a href="https://www.adobe.com/products/air.html" title="Adobe AIR Application">Adobe AIR</a>、<a href="https://msdn.microsoft.com/en-us/library/windows/apps/br211385.aspx" title="Windows Runtime JS API">Windows Runtime Apps</a>、<a href="https://developer.chrome.com/extensions/apps" title="Chrome Packaged Apps">Chrome Apps</a>、<a href="https://developer.mozilla.org/en-US/docs/Archive/Firefox_OS/Firefox_OS_apps/Building_apps_for_Firefox_OS" title="Firefox OS Packaged Apps">Firefox OS</a>、<a href="http://www.openwebosproject.org/" title="Open webOS">WebOS</a>、<a href="https://cordova.apache.org/" title="Apache Cordova">Cordova/Phonegap</a>、<a href="http://electron.atom.io/" title="Electron">Electron</a> 以及国内比如微信、淘宝，无数的 Hybrid 方案拔地而起，让 web 开发者可以在继续使用 web 客户端技术的同时，做到一些只有原生应用才能做到的事情，包括访问一些设备与操作系统 API，给用户带来更加 「Appy」 的体验，以及进入 App Store 等等。</p>

<p><img src="/img/in-post/post-nextgen-web-pwa/qcon-hybridzation.png" alt=""/>
<em>众多的 Hybrid 方案</em></p>

<p>PWA 作为一个涵盖性术语，与过往的这些或多或少通过私有平台 API 增强 web 应用的尝试最大的不同，在于构成 PWA 的每一项基本技术，都已经或正在被 IETF、ECMA、W3C 或 WHATWG 标准化，不出意外的话，它们都将被纳入开放 web 标准，并在不远的将来得到所有浏览器与全平台的支持。我们终于可以逃出 App Store 封闭的秘密花园，重新回到属于 web 的那片开放自由的大地。</p>

<p>有趣的是，从上文中你也可以发现，组成 PWA 的各项技术的草案正是由上述各种私有方案背后的浏览器厂商或开发者直接贡献或间接影响的。可以说，PWA 的背后并不是某一家或两家公司，而是整个 web 社区与整个 web 规范。<strong>正是因为这种开放与去中心化的力量，使得万维网（World Wide Web）能够成为当今世界上跨平台能力最强、且几乎是唯一一个具备这种跨平台能力的应用平台。</strong></p>

<p><a href="http://phonegap.com/blog/2012/05/09/phonegap-beliefs-goals-and-philosophy/" title="PhoneGap Beliefs, Goals, and Philosophy">「我们相信 Web，是因为相信它是解决设备差异化的终极方案；我们相信，当 Web 在今天做不到一件事的时候，是因为它还没来得及去实现，而不是因为他做不到。而 Phonegap，它的终极目的就是消失在 Web 标准的背后。」</a></p>

<p>在不丢失 web 的开放灵魂，在不需要依靠 Hybrid 把应用放在 App Store 的前提下，让 web 应用能够渐进式地跳脱出浏览器的标签，变成用户眼中的 App。这是 Alex Russell 在 2015 年提出 PWA 概念的<a href="https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/" title="Progressive Web Apps: Escaping Tabs Without Losing Our Soul">原委</a>。</p>

<p>而又正因为 web 是一个整体，PWA 可以利用的技术远不止上述的几个而已：Ajax、响应式设计、JavaScript 框架、ECMAScript Next、CSS Next、Houdini、Indexed DB、Device APIs、Web Bluetooth、Web Socket、Web Payment、<a href="https://wicg.github.io/BackgroundSync/spec/" title="Web Background Synchronization - WICG">孵化</a>中的 <a href="developers.google.com/web/updates/2015/12/background-sync" title="Background Sync - Google Developers">Background Sync API</a>、<a href="https://streams.spec.whatwg.org/" title="Streams">Streams</a>、WebVR……开放 Web 世界 27 年来的发展以及未来的一切，都与 PWA 天作之合。</p>

<h2 id="鱼与熊掌的兼得">鱼与熊掌的兼得<a className="anchorjs-link " href="#鱼与熊掌的兼得" aria-label="Anchor link for: 鱼与熊掌的兼得" data-anchorjs-icon="#" style={{opacity: '1', paddingLeft:' 0.375em'}}></a></h2>

<p>经过几年来的摸索，整个互联网行业仿佛在「Web 应用 vs. 原生应用」这个问题上达成了共识：</p>

<ul>
  <li>web 应用是鱼：迭代快，获取用户成本低；跨平台强体验弱，开发成本低。<strong>适合拉新</strong>。</li>
  <li>原生应用是熊掌：迭代慢，获取用户成本高；跨平台弱体验强，开发成本高。<strong>适合保活</strong>。</li>
</ul>

<p>要知道，虽然用户花在原生应用上的时间要明显多于 web 应用，但其中<a href="http://marketingland.com/report-mobile-users-spend-80-percent-time-just-five-apps-116858" title="Report: Mobile Users Spend 80 Percent Of Time In Just Five Apps">有 80% 的时间是花在前五个应用中的</a>。<a href="http://www.recode.net/2016/9/16/12933780/average-app-downloads-per-month-comscore" title="Half of U.S. smartphone users download zero apps per month">调查显示，美国有一半的智能手机用户平均每月新 App 安装量为零</a>，而月均网站访问量却有 100 个，更别提 Google Play 上<a href="https://youtu.be/EUthgV-U05w" title="AdWords for App Promotion - Google">有 60% 的应用从未被人下载过了</a>。于是，整个行业的产品策略清一色地<strong>「拿鱼换熊掌」</strong>，比如笔者的老东家阿里旅行（飞猪旅行），web 应用布满阿里系各种渠道，提供「优秀的第一手体验」，等你用的开心了，再引诱你去下载安装原生应用。</p>


<hr/>

<p><em>注：在笔者撰文期间，Google 在 Google China Developers Days 上宣布了 developers.google.cn 域名的启用，方便国内开发者访问。对于文中所有链向 developers.google.com 的参考文献，应该都可以在 cn 站点中找到。</em></p>





                <ul className="pager">
                    
                    <li className="previous">
                        <a href="/2016/11/20/sw-101-gdgdf/" data-toggle="tooltip" data-placement="top" title="Service Worker 101「GDG DevFest 2016 北京」">
                        Previous<br/>
                        <span>Service Worker 101「GDG DevFest 2016 北京」</span>
                        </a>
                    </li>
                    
                    
                </ul>


              

                
                <div className="comment">
                    <div id="disqus_thread" className="disqus-thread"></div>
                </div>

            </div>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		let that = this;
	}
}

export default DairyInf;