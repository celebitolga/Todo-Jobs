import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Count = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.darkGray};
`;

const FilterWrapper = styled.div`
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-top-left-radius: ${(props) => props.theme.borderRadius.default};
  border-top-right-radius: ${(props) => props.theme.borderRadius.default};
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0 1rem;
  }
`;

const FilterInput = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    &:nth-child(1) {
      width: clamp(350px, 60%, 650px);
    }

    &:nth-child(2) {
      flex: 1;
    }
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.default};
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.default};
  border-spacing: 0;
  text-align: left;
  width: 100%;
`;

const Thead = styled.thead`
  background-color: ${(props) => props.theme.colors.primary};

  th {
    color: ${(props) => props.theme.colors.darkGray};
    font-weight: 700;
  }
`;

const Tbody = styled.tbody`
  tr {
    &:hover {
      background-color: ${(props) => props.theme.colors.gray};
    }
  }
`;

const Tr = styled.tr`
  transition: background-color 0.15s;

  &:nth-child(even) {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;

const Th = styled.th`
  font-weight: 400;
  padding: 1rem 0.75rem;

  &.-sort-mode {
    button {
      color: ${(props) => props.theme.colors.darkGray};
    }
  }
`;

const ButtonsHolder = styled.div`
  display: flex;
  gap: 0 0.75rem;

  button {
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

export {
  Wrapper,
  Title,
  HeaderWrapper,
  Count,
  FilterWrapper,
  FilterInput,
  TableWrapper,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  ButtonsHolder,
};
