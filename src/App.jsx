function App() {
  const menus = [
    {id: 1, name: "カレー", category: "ご飯"},
    {id: 2, name: "オレンジジュース", category: "飲み物"},
    {id: 3, name: "アイス", category: "デザート"}
  ]

  const categorys = ["全部", "ご飯","飲み物","デザート"]

  const [selectedCategory, setSelectedCategory] = useState("全部")

  return (
    <>
      <h1>メニューアプリ</h1>
      <p>ボタンをクリックすると、カテゴリごとにメニューを絞り込めます。</p>
      <div>
        {categorys.map((category) => 
          <button onClick={() => selectedCategory()}>{category}</button>
        )}
      </div>
      <ul>
        {menus.map((menu) => (
          <li>{menu.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
