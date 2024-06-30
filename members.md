---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const icon = '<svg xmlns="http://www.w3.org/2000/svg" fill="#50c8fd" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"/></svg>'
const url = 'mqq://card/show_pslcard?src_type=internal&version=1&card_type=person&source=sharecard&uin='
const member = (uin, name) => ({
  name,
  avatar: `https://q.qlogo.cn/g?b=qq&s=640&nk=` + uin,
  links: [{ icon: { svg: icon }, link: url + uin }],
})
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      凌远引路人
    </template>
    <template #lead>
      此刻我们站在这里，站在天地间的广袤无垠，聆听山风的呼吸。
      <br>
      与风雪同行，感受别样的四季，与日月同在，共度晨昏与白昼。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="[
      member(2927964645, '赵依依'),
      member(1060727187, '张贺然'),
      member(1613885642, '刘佳运'),
      member(2775912008, '张景钊'),
      member(1927447754, '王皖齐'),
      member(3068306281, '曹东淇'),
    ]"
  />
</VPTeamPage>
