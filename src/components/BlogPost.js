import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonPink from "./ui/ButtonPink";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FolderIcon from '@mui/icons-material/Folder';
import {styled} from "@mui/material/styles";

const BlogCard = styled(Card)(() => ({
    width: "100%", marginBottom: "13.3rem", background: "#FFFFFF",
    boxShadow: "10px 13px 80px 14px #F2F4FF",
    borderRadius: "5rem",

}))

export default function BlogPost({img, category, title, description}) {
    return (
        <BlogCard>
            <CardMedia
                component="img"
                alt="post img"
                image={img}
                sx={{
                    height: {
                        lg: "45.3rem",
                        md: "35rem",
                        xs: "25rem"
                    },
                }}

            />
            <CardContent sx={{
                padding: {
                    md: "5.6rem 4.2rem 0 7.6rem",
                    xs: "4rem 3rem"
                },
                textAlign: {
                    md: "left",
                    xs: "center"
                }
            }}>
                <Typography gutterBottom component="h2" sx={{
                    color: "#FF64AE", fontWeight: 600,
                    fontSize: "1.6rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                        xs: "center",
                        md: "flex-start"
                    }
                }}>
                    <FolderIcon sx={{
                        fontSize: 23,
                        marginRight: ".5rem"
                    }}/> {category}
                </Typography>
                <Typography gutterBottom component="h1" sx={{
                    fontWeight: 600,
                    fontSize: "3.6rem",
                    lineHeight: "125%",
                    color: "#091156",
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{
                    fontWeight: 400,
                    fontSize: "1.6rem",
                    lineHeight: '2.4rem',
                    letterSpacing: "0.1em",
                    color: "#8B8B8B",
                }}>
                    {description}
                </Typography>

            </CardContent>
            <CardActions sx={{
                margin: {
                    lg: "1.3rem 4.2rem 10rem 7.6rem",
                    xs: "0 0 5rem 0"
                },
                justifyContent: {
                    xs: "center",
                    md: "flex-start"
                }
            }}>
                <ButtonPink>Read More <ArrowRightIcon fontSize="large"/></ButtonPink>
            </CardActions>
        </BlogCard>
    );
}