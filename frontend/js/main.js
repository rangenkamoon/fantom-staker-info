function addStaker(staker) {
    const markup = `
    <div class="cell" data-title="ID"><p>${staker.id}</p></div>
    <div class="cell name" data-title="Name">
      ${staker.logoUrl ? `
        <img class="float-left" src="${staker.logoUrl}">
      ` : `
        <i class="fas fa-question float-left icon"></i>
      `}
      <div class="float-left ml-3">
        <p class="text-left font-weight-bold"><span>${staker.name ? staker.name : "Unknown"}${staker.name && staker.keybase ? ` <i class="fas fa-check-circle verified"></i>` : ""}</span></p>
        <p class="text-left font-weight-light">${staker.address}</p>
      </div>
    </div>
    <div class="cell" data-title="Self-Staked"><p>${numeral(staker.selfStaked).format("0,0")} FTM</p></div>
    <div class="cell" data-title="Delegated"><p>${numeral(staker.delegated).format("0,0")} FTM</p></div>
    <div class="cell available" data-title="Available"><p>${numeral(staker.available).format("0,0")} FTM <span class="font-weight-light">(${numeral(staker.availablePercent).format("0.00")}%)</span></p></div>
    <div class="cell contact" data-title="Contact">
    ${staker.contact ? `
      <a href="${staker.contact}" target="_blank">
        <i class="fas fa-globe-americas link"></i>
      </a>
    ` : ""}
    </div>
    `;

    const child = document.createElement("div");
    child.className = "row table-row";
    child.innerHTML = markup;

    document.querySelector(".table").appendChild(child);
}

(function ($) {
  const stakers = [{"id": 1, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x541e408443a592c38e01bed0cb31f9de8c1322d0", "selfStaked": 10000000.0, "delegated": 149977690.94836852, "totalStaked": 159977690.94836852, "available": 22309.051631480455, "availablePercent": 0.01}, {"id": 2, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x35701189d211215cb38393f407b4767886deb03a", "selfStaked": 10000000.0, "delegated": 86069966.86908795, "totalStaked": 96069966.86908795, "available": 63930033.13091205, "availablePercent": 42.62}, {"id": 3, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xefc9200cd50ae935da5d79d122660ddb53620e74", "selfStaked": 10000000.0, "delegated": 12003593.327277077, "totalStaked": 22003593.32727708, "available": 137996406.67272294, "availablePercent": 92.0}, {"id": 4, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xe9f77b989e3a73ed24d0467faa9300ab94477915", "selfStaked": 10000000.0, "delegated": 9145085.303533828, "totalStaked": 19145085.30353383, "available": 140854914.69646618, "availablePercent": 93.9}, {"id": 5, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x7f9d1dbaf84d827b0840e38f555a490969978d20", "selfStaked": 10000000.0, "delegated": 3916546.893466537, "totalStaked": 13916546.893466536, "available": 146083453.10653347, "availablePercent": 97.39}, {"id": 6, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xfd09f0296af88ac777c137ecd92d85583a9b9e4a", "selfStaked": 10000000.0, "delegated": 1385021.5067438001, "totalStaked": 11385021.5067438, "available": 148614978.4932562, "availablePercent": 99.08}, {"id": 7, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x520d07e2f0f3f60b7510e65a291862976a9547c6", "selfStaked": 10000000.0, "delegated": 1135495.496015292, "totalStaked": 11135495.496015292, "available": 148864504.50398472, "availablePercent": 99.24}, {"id": 8, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x93194b30fa85d1927852769bab1822dd2b6818e1", "selfStaked": 10000000.0, "delegated": 970067.4541, "totalStaked": 10970067.4541, "available": 149029932.5459, "availablePercent": 99.35}, {"id": 9, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xc73b84eac512a04f139d4a200aae0ff24c4a5cbc", "selfStaked": 10000000.0, "delegated": 794739.0839999999, "totalStaked": 10794739.084, "available": 149205260.916, "availablePercent": 99.47}, {"id": 10, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xd160d9b59508e4636eec3e0a7f734268d1ce1047", "selfStaked": 10000000.0, "delegated": 1954683.3870195, "totalStaked": 11954683.3870195, "available": 148045316.6129805, "availablePercent": 98.7}, {"id": 11, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x03894d86cc6e1e41e8bba17469204d304c4e92b8", "selfStaked": 10000000.0, "delegated": 1843972.08126498, "totalStaked": 11843972.08126498, "available": 148156027.91873503, "availablePercent": 98.77}, {"id": 12, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x51af0532e6bd89695266e714a1b09fd1ac297dc7", "selfStaked": 10000000.0, "delegated": 297193.8, "totalStaked": 10297193.8, "available": 149702806.2, "availablePercent": 99.8}, {"id": 13, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x6cbd00e92e7fcfa176a23449f55d3849e8018d08", "selfStaked": 3175000.0, "delegated": 19505419.94959075, "totalStaked": 22680419.94959075, "available": 28119580.05040925, "availablePercent": 59.04}, {"id": 14, "name": "block42", "keybase": "C57B29418AE33CC0", "website": "https://block42.tech", "contact": "https://t.me/block42_fantom", "logoUrl": "https://s3.amazonaws.com/keybase_processed_uploads/74f5b2d24aa5308993fd7163204eef05_360_360.jpg", "address": "0xa4ddde0afdaea05a3d5a2ec6b5c7f3fc9945020b", "selfStaked": 9002703.0, "delegated": 10302322.38429999, "totalStaked": 19305025.38429999, "available": 124738222.6157, "availablePercent": 92.37}, {"id": 15, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xe06b7c6a68a533134046131cebe07b1e2543074b", "selfStaked": 3195000.0, "delegated": 5957016.45425, "totalStaked": 9152016.45425, "available": 41967983.54575, "availablePercent": 87.57}, {"id": 16, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x35b06b5f1487bc57b2269c700c8be85676c14cec", "selfStaked": 3199999.9999999995, "delegated": 7428386.632259855, "totalStaked": 10628386.632259855, "available": 40571613.36774014, "availablePercent": 84.52}, {"id": 17, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x93419fcb5d9dc7989439f0512d4f737421ed48d9", "selfStaked": 21142012.39, "delegated": 14539613.300382718, "totalStaked": 35681625.69038272, "available": 302590572.5496173, "availablePercent": 95.42}, {"id": 18, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x5c7aa48a1cae3a8a4561ff8e1ec0eab5dc2bffd9", "selfStaked": 3175000.0, "delegated": 6810933.0, "totalStaked": 9985933.0, "available": 40814067.0, "availablePercent": 85.7}, {"id": 19, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xa278c694955ad9e4249ef72baaabbcbfaaf291c6", "selfStaked": 3175000.0, "delegated": 5209370.0, "totalStaked": 8384370.0, "available": 42415630.0, "availablePercent": 89.06}, {"id": 20, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x2f4ed858a60706f2991cec2e66e13575fb9000f2", "selfStaked": 16261106.198527856, "delegated": 130440.80059999999, "totalStaked": 16391546.999127856, "available": 243786152.17731786, "availablePercent": 99.95}, {"id": 21, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x5ca8651fb31046c12691b6391930d33d18afd41b", "selfStaked": 5146200.000000001, "delegated": 77187523.62222263, "totalStaked": 82333723.62222263, "available": 5476.377777382731, "availablePercent": 0.01}, {"id": 22, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x4430a847677649d39ceda79e9229412d3c65852d", "selfStaked": 13313125.0, "delegated": 1530703.7992929916, "totalStaked": 14843828.799292991, "available": 198166171.20070702, "availablePercent": 99.23}, {"id": 23, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xdef670fe0653b79fb1f57f1bb42cf97bdbbceffd", "selfStaked": 3198001.0, "delegated": 538024.0, "totalStaked": 3736025.0, "available": 47431991.0, "availablePercent": 98.88}, {"id": 24, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x9d83c1ec608cdc91d0662e1611816831ed3cb83c", "selfStaked": 3175000.0, "delegated": 1455092.0539277187, "totalStaked": 4630092.053927719, "available": 46169907.94607228, "availablePercent": 96.94}, {"id": 25, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xd7930dd0f4b497618bddfddebe762f5cc1ef895e", "selfStaked": 3175000.0, "delegated": 125.22, "totalStaked": 3175125.22, "available": 47624874.78, "availablePercent": 100.0}, {"id": 26, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0xc23306a50d9d65f72002fc8296ba4276157dcd82", "selfStaked": 3175000.0, "delegated": 588925.94580645, "totalStaked": 3763925.94580645, "available": 47036074.05419355, "availablePercent": 98.76}, {"id": 27, "name": "", "website": "", "contact": "", "logoUrl": "", "address": "0x164befa704d92bb6d72214a26b9527e612bf1c75", "selfStaked": 3175000.0, "delegated": 2109444.71, "totalStaked": 5284444.71, "available": 45515555.29, "availablePercent": 95.57}]

  stakers.forEach((staker) => {
    addStaker(staker);
  })
})(jQuery);