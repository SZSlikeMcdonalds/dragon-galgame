(() => {
  "use strict";

  const SAVE_KEY = "dragon-galgame-save-v1";
  const routeOrder = ["zhien", "hanlin", "daohuaxiang", "wusong", "qiucheng", "panghu", "huashiren", "sanmi", "nenyoutiao", "niangao"];

  const characters = {
    dragon: { name: "暴龙", glyph: "龙", role: "强势美人受｜同盟核心", color: "#e7577d", accent: "#f8c96f" },
    zhien: { name: "知恩", glyph: "恩", role: "温柔克制攻", color: "#9177cc", accent: "#e3b4ff" },
    hanlin: { name: "寒林", glyph: "寒", role: "冷淡指挥攻", color: "#557899", accent: "#9fd5e8" },
    daohuaxiang: { name: "稻花香", glyph: "稻", role: "阳光直球攻", color: "#c78b38", accent: "#f7d477" },
    wusong: { name: "武松", glyph: "武", role: "体育生直球攻", color: "#9d4e52", accent: "#f0a06e" },
    qiucheng: { name: "湫澄", glyph: "蛙", role: "抽象犯二奶蛙攻", color: "#7e8b3d", accent: "#e1c649" },
    panghu: { name: "胖虎", glyph: "虎", role: "吵闹护短忠犬攻", color: "#a84a74", accent: "#ff9ac2" },
    huashiren: { name: "话事人", glyph: "话", role: "成熟腹黑攻", color: "#705d8e", accent: "#f0bf81" },
    sanmi: { name: "三米", glyph: "三", role: "高大沉默攻", color: "#416c70", accent: "#8ed6c8" },
    nenyoutiao: { name: "嫩油条", glyph: "嫩", role: "装乖心机攻", color: "#7d69ba", accent: "#c7b3ff" },
    niangao: { name: "年糕", glyph: "糕", role: "温柔黏人攻", color: "#a46672", accent: "#f4bdac" }
  };

  const line = (speaker, text, extras = {}) => ({ speaker, text, ...extras });

  const prologue = [
    line("旁白", "九月的新赛季开服当晚，南川大学的玩家群比教学楼还亮。十条消息同时跳出来，而被点名最多的人只有一个——暴龙。", { bg: "night" }),
    line("暴龙", "二十一点整攻城。迟到的人自己去铺路，撒娇也没用。", { char: "dragon" }),
    line("话事人", "线下指挥室已经订好。座位按我发的表来，不许擅自换。", { char: "huashiren" }),
    line("胖虎", "凭什么暴龙旁边是你？这表谁批的？", { char: "panghu" }),
    line("湫澄", "【奶蛙举着小旗，原地转了三圈.gif】", { char: "qiucheng", sticker: true }),
    line("暴龙", "湫澄的意思是：他反对，而且准备抢座。", { char: "dragon" }),
    line("旁白", "群里安静了两秒。所有人都想不明白，暴龙究竟是怎么从一只转圈奶蛙里读出这句话的。"),
    line("嫩油条", "我刚入盟，只认识暴龙哥哥。我坐他旁边学习，大家不会介意吧？", { char: "nenyoutiao" }),
    line("年糕", "先让他吃饭。我做了夜宵，空着肚子没法指挥。", { char: "niangao" }),
    line("寒林", "东侧缺人。暴龙跟我的队。", { char: "hanlin" }),
    line("稻花香", "巧了，我的队也缺他。", { char: "daohuaxiang" }),
    line("武松", "别在群里抢。到现场，看他自己选。", { char: "wusong" }),
    line("知恩", "战报我整理好了。暴龙，下课后给你。", { char: "zhien" }),
    line("三米", "结束后我送他回宿舍。", { char: "sanmi" }),
    line("暴龙", "一个个都挺会替我安排。", { char: "dragon" }),
    line("旁白", "他按灭屏幕，唇角却微微扬起。距离线下攻城还有五个小时——足够他亲自看看，这十个人到底能乱成什么样。", { bg: "classroom" })
  ];

  const routes = {
    zhien: {
      title: "领带与战报", location: "空教室", bg: "classroom", preview: "温柔的人，吃醋也很安静。",
      intro: [
        line("旁白", "辩论队训练结束，知恩把整理好的战报放到暴龙面前。空教室里只剩翻页声。"),
        line("知恩", "你昨晚两点还在线。今天别再熬了。", { char: "zhien" }),
        line("暴龙", "你查我上线时间？", { char: "dragon" }),
        line("知恩", "我只是习惯留意队友。", { char: "zhien" }),
        line("旁白", "暴龙的目光落在他微微歪斜的领带上。知恩没有躲，只有呼吸比刚才慢了一拍。")
      ],
      prompt: "暴龙准备怎样拆穿他？",
      choices: [
        {
          label: "勾住领带，把他拉近", delta: 2,
          response: [
            line("暴龙", "队友会这样替你整理领带？", { char: "dragon" }),
            line("旁白", "他指尖一收，知恩不得不俯身。两人的呼吸隔着半寸距离撞在一起。"),
            line("知恩", "不会。所以你最好别让我误会。", { char: "zhien" }),
            line("暴龙", "我就是故意让你误会。", { char: "dragon" })
          ]
        },
        {
          label: "用战报轻敲他的肩", delta: 1,
          response: [
            line("暴龙", "下次想管我，别拿队友当借口。", { char: "dragon" }),
            line("知恩", "那我换一个身份，可以吗？", { char: "zhien" }),
            line("暴龙", "先排队。申请表都快堆满了。", { char: "dragon" })
          ]
        }
      ]
    },
    hanlin: {
      title: "雨幕驻守", location: "图书馆外", bg: "rain", preview: "他的伞总偏向暴龙那一侧。",
      intro: [
        line("旁白", "离开图书馆时骤雨倾盆。寒林撑开黑伞，沉默地站到暴龙身侧。"),
        line("暴龙", "伞是我的。你借了三周。", { char: "dragon" }),
        line("寒林", "知道。", { char: "hanlin" }),
        line("暴龙", "故意不还？", { char: "dragon" }),
        line("寒林", "想多见你几次。", { char: "hanlin" })
      ],
      prompt: "雨声盖住了半句真心。暴龙会——",
      choices: [
        {
          label: "握住伞柄，让两人的手叠在一起", delta: 2,
          response: [
            line("旁白", "暴龙的手覆上来，寒林没有收回。伞下空间忽然显得太窄。"),
            line("暴龙", "今晚想让我跟你的队？", { char: "dragon" }),
            line("寒林", "不只今晚。", { char: "hanlin" }),
            line("暴龙", "那就看你守不守得住。", { char: "dragon" })
          ]
        },
        {
          label: "故意走出伞沿", delta: 1,
          response: [
            line("旁白", "寒林立刻追上，伞面再次稳稳罩住暴龙。"),
            line("暴龙", "这么怕我淋湿？", { char: "dragon" }),
            line("寒林", "怕你不肯让我送第二次。", { char: "hanlin" })
          ]
        }
      ]
    },
    daohuaxiang: {
      title: "排名之外", location: "农学院温室", bg: "green", preview: "直球选手也会偷偷问排名。",
      intro: [
        line("旁白", "稻花香把暴龙带进实验温室，说有一颗最甜的草莓必须留给他。"),
        line("稻花香", "新赛季第一块高级地给你，第一颗草莓也给你。够偏心了吧？", { char: "daohuaxiang" }),
        line("暴龙", "这么会送，想换什么？", { char: "dragon" }),
        line("稻花香", "换一个排名。我在你心里排第几？", { char: "daohuaxiang" }),
        line("旁白", "他笑得灿烂，捏住果柄的手却明显紧了。")
      ],
      prompt: "暴龙摘下那颗草莓——",
      choices: [
        {
          label: "送到他唇边，让他先尝", delta: 2,
          response: [
            line("暴龙", "先证明你挑得够甜。", { char: "dragon" }),
            line("稻花香", "你这样喂，我哪还尝得出味道？", { char: "daohuaxiang" }),
            line("暴龙", "那就别问排名。容易分心的人进不了主力。", { char: "dragon" }),
            line("稻花香", "我申请加试。只考你这一科。", { char: "daohuaxiang" })
          ]
        },
        {
          label: "自己咬一口，再告诉他答案", delta: 1,
          response: [
            line("暴龙", "挺甜。排名暂时保密。", { char: "dragon" }),
            line("稻花香", "那我每天送，送到你肯说为止。", { char: "daohuaxiang" }),
            line("旁白", "他的直球没有拐弯，却精准得让暴龙多看了他一眼。")
          ]
        }
      ]
    },
    wusong: {
      title: "护腕升温", location: "校体育馆", bg: "gym", preview: "最坦荡的人，反而最不禁逗。",
      intro: [
        line("旁白", "体育馆里，武松单膝蹲下，一圈圈替暴龙缠好护腕。"),
        line("暴龙", "平时给别人也缠这么慢？", { char: "dragon" }),
        line("武松", "别人没有这个待遇。", { char: "wusong" }),
        line("暴龙", "什么待遇？", { char: "dragon" }),
        line("武松", "让我这么紧张的待遇。", { char: "wusong" })
      ],
      prompt: "暴龙活动了一下手腕——",
      choices: [
        {
          label: "俯身贴近，问他怕什么", delta: 2,
          response: [
            line("旁白", "发梢擦过武松侧脸。他没退，托着暴龙腕骨的手却明显收紧。"),
            line("武松", "怕你再靠近，我会当真。", { char: "wusong" }),
            line("暴龙", "你凭什么觉得，我不是认真的？", { char: "dragon" }),
            line("旁白", "武松第一次在训练场上忘了下一步动作。")
          ]
        },
        {
          label: "戴上拳套，向他发起挑战", delta: 1,
          response: [
            line("暴龙", "打赢我，再说紧张。", { char: "dragon" }),
            line("武松", "我不想赢你。", { char: "wusong" }),
            line("暴龙", "那你想要什么？", { char: "dragon" }),
            line("武松", "想站在你选中的那一边。", { char: "wusong" })
          ]
        }
      ]
    },
    qiucheng: {
      title: "奶蛙密语", location: "湫澄的宿舍", bg: "frog", preview: "全世界只有暴龙听得懂他的奶蛙。",
      intro: [
        line("旁白", "湫澄的宿舍整齐得过分，除了一整排神情各异的黄色奶蛙。"),
        line("湫澄", "【奶蛙端着小心心，严肃点头.gif】", { char: "qiucheng", sticker: true }),
        line("暴龙", "你当面也要发？", { char: "dragon" }),
        line("旁白", "湫澄点头，又发了一只奶蛙抱住另一只奶蛙。然后把手机举到暴龙面前，表情比奶蛙还认真。"),
        line("暴龙", "它喜欢我？", { char: "dragon" }),
        line("湫澄", "我不敢。先让它喜欢。", { char: "qiucheng" })
      ],
      prompt: "暴龙看着这个犯二的人，决定——",
      choices: [
        {
          label: "抓住他的衣领：让奶蛙走开", delta: 2,
          response: [
            line("暴龙", "换你自己说。", { char: "dragon" }),
            line("旁白", "两人的距离骤然缩短。湫澄看看暴龙，又看看手机，认真按下一张表情包。"),
            line("湫澄", "【奶蛙捂住嘴，头顶炸开十颗爱心.gif】", { char: "qiucheng", sticker: true }),
            line("暴龙", "……算了。至少这次我看懂了。", { char: "dragon" })
          ]
        },
        {
          label: "拿走最大的奶蛙玩偶", delta: 1,
          response: [
            line("暴龙", "借我。想拿回去就来找我。", { char: "dragon" }),
            line("湫澄", "【奶蛙扛着行李，连夜出发.gif】", { char: "qiucheng", sticker: true }),
            line("旁白", "暴龙沉默两秒，确认这张的意思是：今晚就去。")
          ]
        }
      ]
    },
    panghu: {
      title: "耳机里的心跳", location: "乐队排练室", bg: "music", preview: "群里最吵的人，靠近后最安静。",
      intro: [
        line("旁白", "胖虎把一只耳机塞给暴龙，另一只留给自己。为了听同一段旋律，两人肩膀紧贴。"),
        line("胖虎", "这段鼓点是不是特别稳？", { char: "panghu" }),
        line("暴龙", "没听清。你心跳太吵。", { char: "dragon" }),
        line("胖虎", "我那是被你气的。", { char: "panghu" }),
        line("旁白", "他说得很凶，身体却僵得连呼吸都小心翼翼。")
      ],
      prompt: "暴龙偏过脸，靠近他的耳侧——",
      choices: [
        {
          label: "故意问：还要再近一点吗？", delta: 2,
          response: [
            line("胖虎", "你别以为我不敢。", { char: "panghu" }),
            line("暴龙", "那你为什么不看我？", { char: "dragon" }),
            line("胖虎", "……因为看了就更吵。", { char: "panghu" }),
            line("旁白", "暴龙笑了一声。耳机里的鼓点忽然变得无关紧要。")
          ]
        },
        {
          label: "摘下耳机，夸他的新歌", delta: 1,
          response: [
            line("暴龙", "歌不错。写给谁的？", { char: "dragon" }),
            line("胖虎", "谁听懂就是给谁的。", { char: "panghu" }),
            line("暴龙", "那我听懂了。", { char: "dragon" })
          ]
        }
      ]
    },
    huashiren: {
      title: "假公济私", location: "校庆后台", bg: "backstage", preview: "他安排所有人，却安排不了暴龙。",
      intro: [
        line("旁白", "校庆后台，话事人拿着流程表拦住暴龙，说服装和座位都需要他亲自确认。"),
        line("暴龙", "学生会没人了？", { char: "dragon" }),
        line("话事人", "有。但我只信你的眼光。", { char: "huashiren" }),
        line("暴龙", "还是只想把我留在你身边？", { char: "dragon" }),
        line("话事人", "两者并不冲突。", { char: "huashiren" })
      ],
      prompt: "暴龙发现他的工作牌歪了——",
      choices: [
        {
          label: "替他整理领口，反客为主", delta: 2,
          response: [
            line("旁白", "暴龙的指尖停在衬衫第二颗纽扣旁。话事人的笑意没变，呼吸却乱了一拍。"),
            line("暴龙", "利用职权，要接受监督。", { char: "dragon" }),
            line("话事人", "欢迎你全天监督。", { char: "huashiren" }),
            line("暴龙", "想得挺美。先看今晚表现。", { char: "dragon" })
          ]
        },
        {
          label: "拿走他的流程表，重排座位", delta: 1,
          response: [
            line("暴龙", "我坐哪里，我自己决定。", { char: "dragon" }),
            line("话事人", "当然。那我申请坐你旁边。", { char: "huashiren" }),
            line("暴龙", "申请收到，排队等通知。", { char: "dragon" })
          ]
        }
      ]
    },
    sanmi: {
      title: "一次拥抱的许可", location: "图书馆", bg: "library", preview: "压迫感和分寸感，可以同时存在。",
      intro: [
        line("旁白", "闭馆前，暴龙踩上矮梯取书。梯脚一晃，三米及时扶住他的腰。"),
        line("三米", "站稳了吗？", { char: "sanmi" }),
        line("暴龙", "你先松手，我才知道。", { char: "dragon" }),
        line("旁白", "三米立刻收回手，却依旧抬着手臂护在他身侧。"),
        line("三米", "扶你不需要多想。抱你需要同意。", { char: "sanmi" })
      ],
      prompt: "暴龙从梯子上下来——",
      choices: [
        {
          label: "张开手臂：现在同意了", delta: 2,
          response: [
            line("旁白", "三米怔了一瞬，才克制地将他抱住。力道很稳，时间却短得近乎守礼。"),
            line("暴龙", "这么快就松？", { char: "dragon" }),
            line("三米", "怕太久，你会听见。", { char: "sanmi" }),
            line("暴龙", "我已经听见了。", { char: "dragon" })
          ]
        },
        {
          label: "把书递给他，让他继续护送", delta: 1,
          response: [
            line("暴龙", "书你拿，人也交给你送。仅限今晚。", { char: "dragon" }),
            line("三米", "那我明天再申请。", { char: "sanmi" }),
            line("旁白", "他说得认真，仿佛这是一场可以持续整个赛季的驻守。")
          ]
        }
      ]
    },
    nenyoutiao: {
      title: "新人教学", location: "电竞社", bg: "esports", preview: "他装得很乖，只是忘了藏住眼神。",
      intro: [
        line("嫩油条", "暴龙哥哥，我真的不会配。你能不能手把手教？", { char: "nenyoutiao" }),
        line("旁白", "电竞社的蓝光落在他脸上，神情无辜，战报却漂亮得完全不像新人。"),
        line("暴龙", "你这队打了四千场，还需要我教？", { char: "dragon" }),
        line("嫩油条", "被发现了。", { char: "nenyoutiao" }),
        line("暴龙", "装新人好玩吗？", { char: "dragon" })
      ],
      prompt: "嫩油条没有退开，反而把手机递得更近——",
      choices: [
        {
          label: "握住他的手，替他完成操作", delta: 2,
          response: [
            line("旁白", "暴龙的手覆在他指节上。嫩油条笑意更深，却乖乖没有乱动。"),
            line("暴龙", "最后教一次。再装，就罚你铺路。", { char: "dragon" }),
            line("嫩油条", "那哥哥会一直来检查我吗？", { char: "nenyoutiao" }),
            line("暴龙", "看你值不值得。", { char: "dragon" })
          ]
        },
        {
          label: "收走手机，让他自己坦白", delta: 1,
          response: [
            line("嫩油条", "我会配将，只是不太会追人。", { char: "nenyoutiao" }),
            line("暴龙", "后半句也是假话。", { char: "dragon" }),
            line("嫩油条", "那你为什么还来？", { char: "nenyoutiao" }),
            line("暴龙", "因为我想看你还能演多久。", { char: "dragon" })
          ]
        }
      ]
    },
    niangao: {
      title: "顺手多做一份", location: "宿舍公共厨房", bg: "kitchen", preview: "最温柔的人，也有最固执的黏法。",
      intro: [
        line("旁白", "年糕把热好的夜宵推到暴龙面前，自己拉开旁边的椅子坐下。"),
        line("年糕", "顺手多做了一份。", { char: "niangao" }),
        line("暴龙", "你连续顺手了十二天。", { char: "dragon" }),
        line("年糕", "那就证明我很顺手。", { char: "niangao" }),
        line("旁白", "他笑得温和，却自然地把嫩油条刚发来的私信提示按灭。")
      ],
      prompt: "暴龙看见了他的小动作——",
      choices: [
        {
          label: "靠近追问：你也会吃醋？", delta: 2,
          response: [
            line("旁白", "暴龙一手撑住桌沿，把年糕困在椅背与自己之间。"),
            line("年糕", "会。但我不抢你的决定。", { char: "niangao" }),
            line("暴龙", "只抢我的时间？", { char: "dragon" }),
            line("年糕", "如果你愿意，我想每天都抢。", { char: "niangao" })
          ]
        },
        {
          label: "分他一半夜宵", delta: 1,
          response: [
            line("暴龙", "既然是多做的，你陪我吃完。", { char: "dragon" }),
            line("年糕", "好。今晚攻城结束，我也陪你走回去。", { char: "niangao" }),
            line("暴龙", "前半句批准，后半句待定。", { char: "dragon" })
          ]
        }
      ]
    }
  };

  const finale = [
    line("旁白", "二十一点，校园电竞房。攻城倒计时只剩十分钟，现实里的座位战却先一步开打。", { bg: "finale" }),
    line("话事人", "按流程，暴龙坐主位，我在他右边。", { char: "huashiren" }),
    line("胖虎", "你那流程早被他改了。起开。", { char: "panghu" }),
    line("嫩油条", "哥哥，我只占左边一点点。新人需要保护。", { char: "nenyoutiao" }),
    line("寒林", "打了四千场的新人？", { char: "hanlin" }),
    line("年糕", "先别围。他还没吃饭。", { char: "niangao" }),
    lin…615 tokens truncated…cument.querySelector("#route-chip"), routeChipName: document.querySelector("#route-chip strong"),
    speaker: document.querySelector("#speaker"), dialogueBox: document.querySelector("#dialogue-box"), dialogueText: document.querySelector("#dialogue-text"), choices: document.querySelector("#choice-list"), next: document.querySelector("#next-indicator"),
    auto: document.querySelector("#auto-btn"), skip: document.querySelector("#skip-btn"),
    status: document.querySelector("#status-btn"), log: document.querySelector("#log-btn"), save: document.querySelector("#save-btn"), load: document.querySelector("#load-btn"), home: document.querySelector("#home-btn"),
    modal: document.querySelector("#modal"), modalClose: document.querySelector("#modal-close"), modalKicker: document.querySelector("#modal-kicker"), modalTitle: document.querySelector("#modal-title"), modalBody: document.querySelector("#modal-body"),
    toast: document.querySelector("#toast")
  };

  let state = createInitialState();
  let typeTimer = null;
  let autoTimer = null;
  let typing = false;
  let fullText = "";
  let toastTimer = null;

  function createInitialState() {
    const affection = {};
    routeOrder.forEach(id => { affection[id] = 0; });
    return { phase: "prologue", index: 0, routeId: null, branch: null, completed: [], affection, history: [], auto: false, replaying: false, ending: null };
  }

  function hasSave() {
    try { return Boolean(localStorage.getItem(SAVE_KEY)); } catch { return false; }
  }

  function showScreen(which) {
    const playing = which === "game";
    dom.title.classList.toggle("is-hidden", playing);
    dom.game.classList.toggle("is-hidden", !playing);
    dom.continueBtn.disabled = !hasSave();
  }

  function startNewGame() {
    stopAuto();
    closeModal();
    state = createInitialState();
    showScreen("game");
    render();
  }

  function currentLines() {
    if (state.phase === "prologue") return prologue;
    if (state.phase === "route-intro") return routes[state.routeId].intro;
    if (state.phase === "route-response") return routes[state.routeId].choices[state.branch].response;
    if (state.phase === "finale") return finale;
    if (state.phase === "ending") return getEndingLines(state.ending);
    return [];
  }

  function getEndingLines(key) {
    const topId = getTopCharacter();
    const top = characters[topId];
    if (key === "closest") {
      return [
        line("暴龙", `${top.name}，你送我。其他人——留在这里复盘。`, { char: "dragon", bg: "night" }),
        line(top.name, "只送到宿舍楼下？", { char: topId }),
        line("暴龙", "先走完这一段，再问下一段。", { char: "dragon" }),
        line("旁白", `身后的争论声几乎掀翻电竞房。${top.name}没有回头，只把脚步放慢，与暴龙并肩走进夜色。`),
        line("暴龙", "别高兴太早。今晚羁绊最高，不代表你已经赢了。", { char: "dragon" }),
        line("旁白", "——单人开放结局：暂时领先")
      ];
    }
    if (key === "all") {
      const extra = state.completed.length === routeOrder.length ? "十条私会留下的默契同时被点亮。" : "没有赴过的约，也在今晚重新排进日程。";
      return [
        line("暴龙", "都坐下。谁再抢位置，就去前线铺路。", { char: "dragon", bg: "finale" }),
        line("旁白", "十个人立刻安静，椅子却谁也没有往后挪。"),
        line("暴龙", "游戏里的地可以分。至于我——你们凭什么觉得，只能归一个人？", { char: "dragon" }),
        line("湫澄", "【十只奶蛙排成一队，举牌写着“收到”.gif】", { char: "qiucheng", sticker: true }),
        line("旁白", `${extra}屏幕上城池易主，现实里的追逐却才刚刚开始。`),
        line("旁白", "——全员开放结局：请按顺序心动")
      ];
    }
    return [
      line("暴龙", "今晚谁也别跟。我自己走。", { char: "dragon", bg: "night" }),
      line("旁白", "十个人面面相觑，却没有一个越过他划下的边界。"),
      line("暴龙", "想追我，先学会尊重我的指挥。下一次集合，我会点名。", { char: "dragon" }),
      line("旁白", "他披上自己的外套，带走咖啡、草莓和那只巨大的奶蛙。"),
      line("暴龙", "至于今晚——主城不用守。我从来不是谁的领地。", { char: "dragon" }),
      line("旁白", "——暴龙结局：指挥权在我")
    ];
  }

  function render() {
    clearTimers();
    if (state.phase === "hub") return renderHub();
    dom.hub.classList.add("is-hidden");
    dom.stage.classList.remove("is-hidden");

    if (state.phase === "route-choice") return renderRouteChoice();
    if (state.phase === "ending-choice") return renderEndingChoice();
    if (state.phase === "credits") return renderCredits();

    const lines = currentLines();
    const item = lines[state.index];
    if (!item) return finishSequence();
    renderLine(item);
  }

  function renderLine(item) {
    const meta = phaseMeta();
    dom.chapter.textContent = meta.kicker;
    dom.sceneTitle.textContent = meta.title;
    if (item.bg) dom.game.dataset.bg = item.bg;
    else if (state.routeId && routes[state.routeId]) dom.game.dataset.bg = routes[state.routeId].bg;

    dom.choices.classList.add("is-hidden");
    dom.choices.innerHTML = "";
    dom.next.classList.remove("is-hidden");
    dom.speaker.textContent = item.speaker;
    renderPortrait(item.char);
    renderRouteChip();

    if (item.sticker) {
      typing = false;
      dom.dialogueText.innerHTML = frogMarkup(item.text);
      addHistory(item);
      scheduleAuto();
      return;
    }

    fullText = item.text;
    dom.dialogueText.textContent = "";
    typing = true;
    let i = 0;
    typeTimer = window.setInterval(() => {
      i += 1;
      dom.dialogueText.textContent = fullText.slice(0, i);
      if (i >= fullText.length) finishTyping(item);
    }, 24);
  }

  function finishTyping(item = currentLines()[state.index]) {
    if (typeTimer) window.clearInterval(typeTimer);
    typeTimer = null;
    typing = false;
    dom.dialogueText.textContent = fullText;
    if (item) addHistory(item);
    scheduleAuto();
  }

  function addHistory(item) {
    const signature = `${state.phase}:${state.routeId || "-"}:${state.branch ?? "-"}:${state.index}`;
    if (state.history.some(h => h.signature === signature)) return;
    state.history.push({ signature, speaker: item.speaker, text: item.text });
    if (state.history.length > 120) state.history.shift();
  }

  function renderPortrait(id) {
    if (!id || !characters[id]) {
      dom.portrait.classList.add("is-hidden");
      return;
    }
    const c = characters[id];
    dom.portrait.classList.remove("is-hidden");
    dom.portrait.style.setProperty("--char", c.color);
    dom.portrait.style.setProperty("--accent-char", c.accent);
    dom.portraitGlyph.textContent = c.glyph;
    dom.portraitName.textContent = c.name;
    dom.portraitRole.textContent = c.role;
  }

  function renderRouteChip() {
    if (!state.routeId || !routes[state.routeId] || state.phase === "ending") {
      dom.routeChip.classList.add("is-hidden");
      return;
    }
    dom.routeChip.classList.remove("is-hidden");
    dom.routeChipName.textContent = routes[state.routeId].title;
  }

  function phaseMeta() {
    if (state.phase.startsWith("route")) return { kicker: "角色支线", title: `${characters[state.routeId].name}｜${routes[state.routeId].title}` };
    if (state.phase.startsWith("finale") || state.phase.startsWith("ending")) return { kicker: "最终章", title: "线下攻城夜" };
    return { kicker: "序章", title: "新赛季，十条私信" };
  }

  function renderHub() {
    dom.game.dataset.bg = "night";
    dom.stage.classList.add("is-hidden");
    dom.hub.classList.remove("is-hidden");
    dom.chapter.textContent = "自由行动";
    dom.sceneTitle.textContent = "十条支线，一场攻城";
    dom.routeCount.textContent = state.completed.length;
    dom.routeGrid.innerHTML = "";

    routeOrder.forEach(id => {
      const c = characters[id];
      const r = routes[id];
      const done = state.completed.includes(id);
      const button = document.createElement("button");
      button.className = `route-card${done ? " completed" : ""}`;
      button.style.setProperty("--route-color", c.color);
      button.dataset.glyph = c.glyph;
      button.innerHTML = `<small>${escapeHtml(r.location)} · 羁绊 ${state.affection[id]}</small><strong>${escapeHtml(c.name)}</strong><span>${escapeHtml(r.preview)}</span>`;
      button.addEventListener("click", () => startRoute(id));
      dom.routeGrid.appendChild(button);
    });

    const remain = Math.max(0, 3 - state.completed.length);
    dom.finaleBtn.disabled = remain > 0;
    dom.finaleBtn.textContent = remain > 0 ? `再完成 ${remain} 段私会解锁修罗场` : "进入线下攻城夜 →";
    autosave();
  }

  function startRoute(id) {
    state.routeId = id;
    state.phase = "route-intro";
    state.index = 0;
    state.branch = null;
    state.replaying = state.completed.includes(id);
    render();
  }

  function renderRouteChoice() {
    const route = routes[state.routeId];
    dom.game.dataset.bg = route.bg;
    dom.chapter.textContent = "抉择";
    dom.sceneTitle.textContent = `${characters[state.routeId].name}｜${route.title}`;
    dom.speaker.textContent = "暴龙的选择";
    dom.dialogueText.textContent = route.prompt;
    dom.next.classList.add("is-hidden");
    dom.choices.classList.remove("is-hidden");
    dom.choices.innerHTML = "";
    renderPortrait("dragon");
    renderRouteChip();

    route.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.innerHTML = `${escapeHtml(choice.label)}<small>${state.replaying ? "回想" : `羁绊 +${choice.delta}`}</small>`;
      button.addEventListener("click", event => {
        event.stopPropagation();
        if (!state.replaying) state.affection[state.routeId] += choice.delta;
        state.branch = index;
        state.phase = "route-response";
        state.index = 0;
        render();
      });
      dom.choices.appendChild(button);
    });
  }

  function renderEndingChoice() {
    dom.game.dataset.bg = "finale";
    dom.chapter.textContent = "最终抉择";
    dom.sceneTitle.textContent = "今夜，谁来守城";
    dom.speaker.textContent = "暴龙的决定";
    dom.dialogueText.textContent = "十道目光都在等待。他决定——";
    dom.next.classList.add("is-hidden");
    dom.choices.classList.remove("is-hidden");
    dom.choices.innerHTML = "";
    renderPortrait("dragon");
    dom.routeChip.classList.add("is-hidden");

    endingChoices.forEach(choice => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.innerHTML = `${escapeHtml(choice.label)}<small>${escapeHtml(choice.hint)}</small>`;
      button.addEventListener("click", event => {
        event.stopPropagation();
        state.ending = choice.key;
        state.phase = "ending";
        state.index = 0;
        render();
      });
      dom.choices.appendChild(button);
    });
  }

  function finishSequence() {
    if (state.phase === "prologue") {
      state.phase = "hub";
    } else if (state.phase === "route-intro") {
      state.phase = "route-choice";
    } else if (state.phase === "route-response") {
      if (!state.completed.includes(state.routeId)) state.completed.push(state.routeId);
      state.phase = "hub";
      state.routeId = null;
      state.branch = null;
      state.replaying = false;
    } else if (state.phase === "finale") {
      state.phase = "ending-choice";
    } else if (state.phase === "ending") {
      state.phase = "credits";
    }
    state.index = 0;
    render();
  }

  function advance() {
    if (!dom.modal.classList.contains("is-hidden")) return;
    if (["hub", "route-choice", "ending-choice", "credits"].includes(state.phase)) return;
    if (typing) {
      finishTyping();
      return;
    }
    state.index += 1;
    render();
  }

  function enterFinale() {
    if (state.completed.length < 3) return;
    state.phase = "finale";
    state.routeId = null;
    state.index = 0;
    state.branch = null;
    autosave();
    render();
  }

  function getTopCharacter() {
    return routeOrder.reduce((best, id) => state.affection[id] > state.affection[best] ? id : best, routeOrder[0]);
  }

  function saveGame(showNotice = true) {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({ ...state, savedAt: new Date().toISOString() }));
      dom.continueBtn.disabled = false;
      if (showNotice) toast("进度已保存到浏览器");
    } catch {
      toast("浏览器阻止了本地存档");
    }
  }

  function autosave() { saveGame(false); }

  function loadGame() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return toast("还没有可读取的存档");
      const loaded = JSON.parse(raw);
      state = { ...createInitialState(), ...loaded };
      state.affection = { ...createInitialState().affection, ...(loaded.affection || {}) };
      state.completed = Array.isArray(loaded.completed) ? loaded.completed.filter(id => routeOrder.includes(id)) : [];
      state.history = Array.isArray(loaded.history) ? loaded.history : [];
      stopAuto();
      showScreen("game");
      closeModal();
      render();
      toast("存档已读取");
    } catch {
      toast("存档损坏，无法读取");
    }
  }

  function showStatus() {
    dom.modalKicker.textContent = `已完成 ${state.completed.length} / 10 条支线`;
    dom.modalTitle.textContent = "羁绊状态";
    dom.modalBody.innerHTML = `<div class="affinity-list">${routeOrder.map(id => {
      const c = characters[id];
      const value = state.affection[id];
      const done = state.completed.includes(id) ? "已赴约" : "未赴约";
      return `<div class="affinity-row" style="--row-color:${c.color}"><strong>${escapeHtml(c.name)}</strong><div class="affinity-track"><div class="affinity-fill" style="width:${Math.min(100, value * 34)}%"></div></div><small>${value} · ${done}</small></div>`;
    }).join("")}</div>`;
    openModal();
  }

  function showLog() {
    dom.modalKicker.textContent = "最近 30 条";
    dom.modalTitle.textContent = "剧情回顾";
    const items = state.history.slice(-30).reverse();
    dom.modalBody.innerHTML = items.length ? `<div class="log-list">${items.map(h => `<div class="log-item"><strong>${escapeHtml(h.speaker)}</strong><p>${escapeHtml(h.text)}</p></div>`).join("")}</div>` : "<p>剧情尚未开始。</p>";
    openModal();
  }

  function showAbout() {
    dom.modalKicker.textContent = "玩法说明";
    dom.modalTitle.textContent = "校园同盟视觉小说";
    dom.modalBody.innerHTML = `
      <p>这是一个可以离线游玩的短篇 Galgame 原型。所有登场角色均为年满 20 岁的成年人。</p>
      <ul class="about-list">
        <li>单击对话框、按空格或 Enter 推进剧情。</li>
        <li>序章结束后可自由选择十条角色支线，至少完成三条即可进入最终章。</li>
        <li>不同选项会改变羁绊；结局没有固定官配。</li>
        <li>“自动”可连续播放；“瞬显”会立即显示完整台词。</li>
        <li>存档保存在当前浏览器中，不会上传到网络。</li>
      </ul>`;
    openModal();
  }

  function renderCredits() {
    showStatusBackdrop();
    dom.modalKicker.textContent = "THE END";
    dom.modalTitle.textContent = "本次赛季结束";
    dom.modalBody.innerHTML = `
      <p>你完成了 <strong>${state.completed.length}</strong> 条角色支线。本轮最高羁绊：<strong>${escapeHtml(characters[getTopCharacter()].name)}</strong>。</p>
      <p>没有固定官配，也没有唯一正确选择。暴龙的下一次集合，仍由你决定。</p>
      <div class="title-actions">
        <button id="credits-restart" class="primary-btn">重新开始</button>
        <button id="credits-hub" class="secondary-btn">返回支线选择</button>
        <button id="credits-title" class="ghost-btn">返回标题</button>
      </div>`;
    openModal(false);
    document.querySelector("#credits-restart").addEventListener("click", startNewGame);
    document.querySelector("#credits-hub").addEventListener("click", () => { closeModal(); state.phase = "hub"; state.ending = null; state.index = 0; render(); });
    document.querySelector("#credits-title").addEventListener("click", () => { closeModal(); showScreen("title"); });
  }

  function showStatusBackdrop() {
    dom.stage.classList.remove("is-hidden");
    dom.hub.classList.add("is-hidden");
    dom.game.dataset.bg = "night";
  }

  function openModal(canClose = true) {
    dom.modal.classList.remove("is-hidden");
    dom.modalClose.classList.toggle("is-hidden", !canClose);
  }

  function closeModal() { dom.modal.classList.add("is-hidden"); }

  function toggleAuto() {
    state.auto = !state.auto;
    dom.auto.classList.toggle("active", state.auto);
    dom.auto.textContent = state.auto ? "自动中" : "自动";
    if (state.auto) scheduleAuto(); else stopAuto(false);
  }

  function scheduleAuto() {
    if (!state.auto || typing || ["hub", "route-choice", "ending-choice", "credits"].includes(state.phase)) return;
    if (autoTimer) window.clearTimeout(autoTimer);
    autoTimer = window.setTimeout(advance, 1900);
  }

  function stopAuto(updateState = true) {
    if (autoTimer) window.clearTimeout(autoTimer);
    autoTimer = null;
    if (updateState) state.auto = false;
    dom.auto.classList.remove("active");
    dom.auto.textContent = "自动";
  }

  function clearTimers() {
    if (typeTimer) window.clearInterval(typeTimer);
    if (autoTimer) window.clearTimeout(autoTimer);
    typeTimer = null;
    autoTimer = null;
    typing = false;
  }

  function frogMarkup(caption) {
    return `<span class="frog-sticker"><span class="frog-face-mini"><span></span></span><span class="frog-caption">${escapeHtml(caption)}</span></span>`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  }

  function toast(message) {
    if (toastTimer) window.clearTimeout(toastTimer);
    dom.toast.textContent = message;
    dom.toast.classList.add("show");
    toastTimer = window.setTimeout(() => dom.toast.classList.remove("show"), 1900);
  }

  dom.newGame.addEventListener("click", startNewGame);
  dom.continueBtn.addEventListener("click", loadGame);
  dom.about.addEventListener("click", showAbout);
  dom.dialogueBox.addEventListener("click", event => { if (!event.target.closest("button")) advance(); });
  dom.skip.addEventListener("click", () => { if (typing) finishTyping(); });
  dom.auto.addEventListener("click", toggleAuto);
  dom.status.addEventListener("click", showStatus);
  dom.log.addEventListener("click", showLog);
  dom.save.addEventListener("click", () => saveGame(true));
  dom.load.addEventListener("click", loadGame);
  dom.home.addEventListener("click", () => { autosave(); stopAuto(); showScreen("title"); });
  dom.finaleBtn.addEventListener("click", enterFinale);
  dom.modalClose.addEventListener("click", closeModal);
  dom.modal.addEventListener("click", event => { if (event.target === dom.modal && !dom.modalClose.classList.contains("is-hidden")) closeModal(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !dom.modalClose.classList.contains("is-hidden")) closeModal();
    if ((event.key === "Enter" || event.code === "Space") && dom.modal.classList.contains("is-hidden") && !dom.game.classList.contains("is-hidden")) {
      event.preventDefault();
      advance();
    }
  });

  dom.continueBtn.disabled = !hasSave();
  showScreen("title");
})();

