function createFormV8() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const form = FormApp.create('スクラム成熟度セルフチェックV8');
  form.setDescription(
    'このアンケートは、チームのスクラムの成熟度を自己評価するためのものです。\n' +
    '各項目について、チームができていると思う項目にチェックを入れてください。\n' +
    'チェックがない項目は「できていない」または「わからない」と判断します。'
  );

  const sections = data
    .slice(1)
    .map(row => row[0])
    .filter((value, index, self) => self.indexOf(value) === index);

  const totalSections = sections.length;
  const halfwayPoint = Math.floor(totalSections / 2);

  sections.forEach((section, sectionIndex) => {
    // セクションの半分の時点でページ区切りを追加
    if (sectionIndex === halfwayPoint) {
      form.addPageBreakItem().setTitle('中間点');
    }

    // セクションヘッダーの追加
    form.addSectionHeaderItem()
        .setTitle(section);
    
    // このセクションに属する質問を追加
    const sectionQuestions = data.slice(1).filter(row => row[0] === section);
    sectionQuestions.forEach((row, questionIndex) => {
      const question = row[1];
      const questionNumber = `${sectionIndex + 1}-${questionIndex + 1}`;
      
      // 各質問に対して個別のチェックボックス項目を作成
      const checkboxItem = form.addCheckboxItem();
      checkboxItem.setTitle(`${questionNumber}. ${question}`);
      // チェックボックスの選択肢として「1」のみを設定
      checkboxItem.setChoices([
        checkboxItem.createChoice('1')
      ]);
    });
  });
}
