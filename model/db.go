package model

type db interface {
	SelectPeople() ([]*Person, error)
	InsertPerson() ([]*Person, error)
}
