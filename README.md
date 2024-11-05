# Scrum Maturity Assessment Tool

このリポジトリは、スクラムチームの成熟度を評価し、改善提案を行うためのツール一式を提供します。

## ファイル一覧

- **scrum_maturity_report_prompt.md**  
  スクラム成熟度レポートのプロンプト仕様書。レポート構造や出力形式についての詳細な指示を含みます。

- **scrum_maturity_questions.csv**  
  スクラム成熟度を評価するための100問の設問が含まれたCSVファイルです。このファイルは、Googleドライブにアップロードし、Googleスプレッドシートとして開くことを想定しています。

- **scrum_maturity_form_generator.gs**  
  Google Apps Scriptで作成されたスクリプト。`scrum_maturity_questions.csv`をもとにGoogleフォームを自動生成します。

## 使用方法

### 1. 設問ファイルの準備

1. `scrum_maturity_questions.csv` ファイルを [Googleドライブ](https://drive.google.com/) にアップロードします。
2. Googleドライブでアップロードした `scrum_maturity_questions.csv` ファイルを右クリックし、「アプリで開く」→「Google スプレッドシート」を選択します。

### 2. アンケートフォームの生成

1. Googleスプレッドシートの内容を確認・編集したら、`scrum_maturity_form_generator.gs` スクリプトを [Google Apps Script](https://script.google.com/) で新規プロジェクトとして作成し、貼り付けます。
2. `scrum_maturity_form_generator.gs` スクリプトを実行すると、Googleスプレッドシートの設問をもとにGoogleフォームが自動生成されます。

### 3. アンケートからCSVデータをエクスポート

1. 生成されたアンケートを用いて、スクラムメンバーに回答を依頼します。
2. 回答が揃ったらアンケートからスプレッドシートに移動し、CSV形式でエクスポートします。

### 4. スクラム成熟度レポートの生成

1. `scrum_maturity_report_prompt.md` を参照し、レポート生成のためのプロンプトを設定します。
2. プロンプトの指示に従って、CSVデータを投入してスクラム成熟度レポートを生成します。

## 免責事項

本リポジトリに含まれるツールおよびスクリプトは、スクラムチームの成熟度評価と改善提案の支援を目的としていますが、その正確性や完全性について保証するものではありません。利用者は自己の責任においてこれらのツールを使用してください。

- `scrum_maturity_form_generator.gs` のスクリプト実行にはGoogleのサービスを利用しますが、Googleサービスの仕様変更や利用者の設定により動作が不安定になる可能性があります。
- `scrum_maturity_report_prompt.md` の実行は chatGPT の GPT-4o で一定の安定性を確認していますが、期待と異なる出力結果となる可能性があります。最終的な判断は利用者が行なってください。
- 本リポジトリのファイルやスクリプトは、利用者の環境や用途に応じて適宜変更や調整が必要になる場合があります。
