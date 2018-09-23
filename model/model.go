package model

type Model struct {
	db
}

func New(db db) *Model {
	return &Model{
		db: db,
	}
}

func (m *Model) GetPeople() ([]*Person, error) {
	return m.SelectPeople()
}

func (m *Model) AddPerson() (*Person, error) {
	return m.InsertPerson()
}
