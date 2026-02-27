import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 12px;
    background: rgba(132, 59, 206, 0.2);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(132, 59, 206, 0.3);
    color: ${({ theme }) => theme.text_primary};
    font-size: 16px;
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);

    &:hover {
        background: rgba(132, 59, 206, 0.3);
        border: 1px solid rgba(132, 59, 206, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(132, 59, 206, 0.3);
        color: ${({ theme }) => theme.primary};
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 10px;
    }
`;

const Card = styled.div`
    width: 350px;
    min-height: 520px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
    border-radius: 16px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
        transform: scale(1.02) translateY(-8px);
        box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.5);
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
    }

    @media (max-width: 768px) {
    width: 80%; 
    margin-bottom: 20px; 
    
    &:hover {
        transform: scale(1.01) translateY(-4px);
    }
  }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.25);
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 28px rgba(0,0,0,0.35);
    }
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background: rgba(132, 59, 206, 0.15);
    backdrop-filter: blur(4px);
    padding: 4px 10px;
    border-radius: 12px;
    border: 1px solid rgba(132, 59, 206, 0.2);
    transition: all 0.2s ease;
    
    &:hover {
        background: rgba(132, 59, 206, 0.25);
        border: 1px solid rgba(132, 59, 206, 0.3);
        transform: translateY(-1px);
    }
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    transition: color 0.2s ease;
    
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + '80'};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const DescriptionContainer = styled.div`
    position: relative;
    margin-top: 8px;
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.5;
    text-shadow: 0 1px 1px rgba(0,0,0,0.05);
    cursor: help;
`;

const Tooltip = styled.div`
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.card_light};
    color: ${({ theme }) => theme.text_primary};
    padding: 16px;
    border-radius: 12px;
    font-size: 13px;
    line-height: 1.6;
    max-width: 350px;
    min-width: 250px;
    word-wrap: break-word;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 1000;
    pointer-events: none;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 8px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    
    ${DescriptionContainer}:hover & {
        opacity: 1;
        visibility: visible;
    }
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project }) => {
    const handleCardClick = () => {
        window.open(project.webapp, '_blank');
    };

    const handleButtonClick = (e) => {
        e.stopPropagation();
        window.open(project.webapp, '_blank');
    };

    return (
        <Card onClick={handleCardClick}>
            <Image src={project.image} alt={project.title} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={`tag-${index}`}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <DescriptionContainer>
                    <Description>{project.description}</Description>
                    <Tooltip>{project.description}</Tooltip>
                </DescriptionContainer>
            </Details>
            <Members>
                {project.members?.map((member, index) => (
                    <Avatar key={`member-${index}`} src={member.img} alt={member.name} />
                ))}
            </Members>
            <Button onClick={handleButtonClick}>View Project</Button>
        </Card>
    );
};

export default ProjectCards;
