import { useRouter } from "next/router";
import Layout from "../../components/layout";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
      <div>
          <Layout>
          <article className="py-16 px-6 sm:px-8">
            <header>
                <h1 className="flex flex-col items-center">
                    <span className="text-indigo-600 font-semibold tracking-wide uppercase"> Introducing </span>
                    <span className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl"> A day in my life</span>
                </h1>
                <hr className="mt-8 border-t-2 w-20 mx-auto"/>
            </header>
            <div className="mt-8 mx-auto prose lg:prose-xl overflow-auto">
            <p>        
      假期随记，想到啥说啥，没啥逻辑，没啥主题，放飞自己。\n\n这是国庆长假的第四天了，潜意识里总觉得这是我毕业后的第一个国庆，但是掰掰手指，这已经是第二个了。不过反而没有像上学那会或者和大多数人一样，强烈的渴望假期的来临，更长的假期，然后早早的计划好，这一年中难得可以真正休息的日子。\n\n过去的这三天，还是一如既往的平静。睡醒，找一家咖啡馆，吃个美美的Brunch，再打打瞌睡，抖擞抖擞，找辆自行车，不紧不慢的。再用一晚上的时间尽情地shake
      shake
      body。\n\n每天的routine都很固定，当然我指的是形式上的固定，内容上都是新的。可能这也是我用来区分什么是”
      a retirement life”，什么是“the path to be a renaissance
      man”.\n\n有两种状态，一种是在舒适圈里稳定的前进，一种是在舒适圈外的野蛮生长。但是很难去用一个恒定的概念去定义什么是舒适圈。
      总会把当下时刻处于高压或者焦虑的精神状态去和走出舒适圈扭曲捆绑在一起。\n\n就好比，只有自己受虐的时候，才会觉得难过，像是有被针扎了一下，有痛感，才觉得自己是活着的。但是这种被撕扯的感觉也不一定说明我正在舒适圈外干着自己不擅长的事，痛苦的感觉并不会对你的Goal有质的飞跃，多数是心理上的慰藉。\n\n更新一下，这是长假的第五天了\n\n也可能是受目前公司的企业文化所熏陶。\n\n不轻易招人，一旦给予offer，就会给予100%的信任。\n\n实用主义大于形式主义。\n\n自组织。\n\n做事前，多扯淡。\n\n自己人做完脑力活，体力活能给外人干就都抛给外人干。\n\n…
      太多了，\n\n这些有意思的文化特性“传承于”谷歌微软系的Engineer culture.
      由于日常被同事们熏陶，所以原本对异域文化感兴趣的我，越发的有想法以及臆想那些坐落在硅谷西雅图的生活状态。\n\n当然事情都是有两面性的，就像我总是在同事的口中听到对于外企文化的认同，但也会在Reddit，quroa上听到在谷歌员工在吐槽shit一般的生活。关键在于，所处的team以及你的leader。\n\n我还是对于那些外企公司保有神秘感，毕竟没有亲身体验过，也不想只是通过“听听”别人口中的话来塑造我对于这件事的认知。\n\n更新一下，今天是长假的第六天了\n\n前阵子总是在GitHub翻各种用户，翻GitHub，Facebook，Amazon…
      有趣的工程师和有趣的UX
      Designer。大多数有趣的人，他们都会有一个自己的blog，blog不仅仅是一个套模版的活，而是结合了自己的小心思，把自己的生活记录下来像个秘密花园，又同时会考虑着怎样可以让第三人在最短的时间内了解自己。\n\n但是挖掘像这种有趣的人，其实也需要费一定的功夫，还是会有很多鱼龙混杂的人，好在当我一打开他们的blog的那一眼，就能知道他是不是那种类型。\n\n而细细的观察和了解一个有趣的人的思想的时候，“能避免重蹈前人覆辙，以及了解不同国家的人，和他们在想什么。”\n\n正好在这里分享几个很有意思的blog：\n\nhttps://zachholman.com/\n\nhttps://skalnik.com/\n\nhttps://christinecha.com/\n\nhttp://broccolini.net/\n\nhttps://chad.is/\n\nhttps://timroussilhe.com/\n\n还有好多…
      也正在慢慢收集ing\n\n说说自己最近在工作和生活的想法：\n\nWork life
      balance不香吗，为什么一定要用996，Bully来慰藉自己似乎正在做着不平凡的事，而事实上我们就是一个平凡的人。\n\n花了好大的力气才可以在当下接受自己，接受自己是一个slow
      walker。接受自己的不完美，接受自己不是那么的聪明。\n\n心思细腻，容易把自己绕进去。学会给自己找出口，可以在失去方向的时候，不用太麻烦，顺着牵引绳走出。\n\n真的是太容易在23岁的年纪，遗憾18岁的我没有做什么事。我不想花太多的时间去回溯和悼念过去了，这样的话，30岁的我就不会后悔23岁的今天，又错过了什么。\n\n做产品是做产品，做工作是做工作。很难有一个机会是做产品=做工作，除非you
      are an Indie hacker, work for yourself and your
      idea。所以爱好是爱好，挣钱是挣钱。\n\n… 未完
    </p>
            </div>
          </article>

    </Layout>
    </div>
  );
};

export default Post;
