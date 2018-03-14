

100.times do
  Post.create(
    name: Faker::HarryPotter.character,
    text: Faker::HarryPotter.quote,
    mood: Faker::HarryPotter.house,
  )
end
