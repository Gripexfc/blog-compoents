import React from "react"

export const NavBar = ({
    navList = ['name1', 'name2', 'name3'],
    label = 'navber'
}: navProps) => {

    const navItem = navList.map(name => {
        return <li>{ name }</li>
    })
    return (
        <ul>
            {
                navItem
            }
            <div>{label}</div>
        </ul>
    )
}

interface navProps {
    navList: Array<string>,
    label: string
} 